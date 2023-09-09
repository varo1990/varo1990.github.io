import React, { useEffect, useState } from 'react'
import Select, { components, createFilter } from 'react-select'
// import { Form } from 'react-bootstrap'
// import { Data } from 'api'
import _ from 'lodash'

const CustomOption = ({ children, ...props }) => {
  const { onMouseMove, onMouseOver, ...rest } = props.innerProps
  const newProps = { ...props, innerProps: rest }
  return (
    <components.Option
      {...newProps}
      className="custom-option"
    >
      {children}
    </components.Option>
  )
}

const customStyles = {
  control: (base, { isFocused }) => ({
    ...base,
    borderColor: '#ccc',
    borderRadius: 8,
    borderBottomLeftRadius: isFocused ? 0 : 8,
    borderBottomRightRadius: isFocused ? 0 : 8,
    boxShadow: 'none',
    caretColor: 'blue',
    '&:hover': {
      borderColor: '#eeeeee'
    }
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isFocused ? '#F8F9FF' : '#fff',
    color: '#000000',
    '&:hover': {
      backgroundColor: '#F8F9FF'
    },
    padding: 16,
    maxHeight: '80vh',
    overflowX: 'hidden',
    overflowY: 'auto'
  }),

}

const SelectInput = (props) => {
  const [options, setOptions] = useState([])
  const [value, setValue] = useState(null)
  const {
    onChange,
    items,
    isMulti,
    labelTitle,
    titleClass,
    iconSrc,
    selected,
    name,
    placeholder,
    isClearable = true,
    isDisabled = false,
    isOptionDisabled,
    cls = '',
    tooltipText,
    tooltipAllSelect = null,
    customOption = false,
    menuIsOpen,
    onInputChange
  } = props

  useEffect(() => {
    items && setOptions(items && items?.map(v => ({
      value: v.value,
      label: v.label,
    })) || [])
  }, [items, customOption])

  useEffect(() => {
    setValue(options.filter(v => v.value === selected)[0])
  }, [options, selected])

  return (
    <div style={{ width: '500px' }} className={`${cls}`} data-rh={tooltipAllSelect || null}>
      {labelTitle &&
        <p className={` ${titleClass}`}>
          {labelTitle}
          {iconSrc && <img src={iconSrc} className='hb-ml-8' alt='' data-rh={tooltipText} />}
        </p>}
      <Select
        classNamePrefix="custom-select"
        components={{ Option: CustomOption }}
        filterOption={createFilter({ ignoreAccents: false })}
        name={name}
        value={value}
        options={options}
        // isSearchable={options.length > 10}
        isMulti={isMulti}
        onChange={onChange}
        styles={customStyles}
        placeholder={<div>{placeholder}</div>}
        isClearable={isClearable}
        isDisabled={isDisabled ? isDisabled : _.isEmpty(options)}
        isOptionDisabled={isOptionDisabled}
        menuIsOpen={menuIsOpen}
        menuPlacement={"auto"}
        onInputChange={onInputChange}
      />
      {/* eslint-disable-next-line react/jsx-no-undef */}
      {/*{!!error && <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>}*/}
    </div>
  )
}

export default SelectInput
