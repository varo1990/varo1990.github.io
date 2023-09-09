import React, {useEffect, useState} from 'react';
import Wrapper from "../components/Wrapper";
import left from "../assets/image/task/left.svg";
import see from "../assets/image/task/see.svg";
import category from "../assets/image/task/category.svg";
import add from "../assets/image/task/add.svg";
import clocke from "../assets/image/task/clocke.svg";
import notifications from "../assets/image/task/notifications.svg";
import mail from "../assets/image/task/mail.svg";
import telegram from "../assets/image/task/telegram.svg";
import color from "../assets/image/task/color.svg";
import format_list from "../assets/image/task/format_list.svg";
import _ from 'lodash'
import SelectInput from '../elements/SelectInput'
import {Field, Formik} from 'formik'
import {dateType, timeHours, timeMinutes} from '../helpers/timeHelpers'
import {categoryColors} from '../helpers/colorHelpers'
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";

const CATEGORY_BTN_TYPE = {
  READ_BOOKS: 'READ_BOOKS',
  DRINK_WATER: 'DRINK_WATER',
  DO_EXERCISES: 'DO_EXERCISES',
  DO_ONLINE_CLASSES: 'DO_ONLINE_CLASSES',
}

const Tasks = (props) => {
  const {setTaskList, setEditList, categories, setCategories} = props
  const [isDisabledCategoryBtn, setIsDisabledCategoryBtn] = useState('')
  const [value, setValue] = useState('')
  const [activeColor, setActiveColor] = useState(null)

  const [categoryButtons] = useState([
    {
      key: 'READ_BOOKS',
      title: 'Read books',
    },
    {
      key: 'DRINK_WATER',
      title: 'Drink water',
    },
    {
      key: 'DO_EXERCISES',
      title: 'Do exercises',
    },
    {
      key: 'DO_ONLINE_CLASSES',
      title: 'Do online classes',
    },
  ])
  const [categoryListCount, setCategoryListCount] = useState([1])
  const navigate = useNavigate()

  // useEffect(() => {
  //
  // }, []);
  //
  // useEffect(() => {
  //
  // }, [update]);
  //
  // useEffect(() => {
  //   return () => {
  //
  //   }
  // }, []);
  // firstName: Yup.string()
  //   .min(2, "Too Short!")
  //   .max(50, "Too Long!")
  //   .required("Firstname is required"),
  // lastName: Yup.string()
  //   .min(2, "Too Short!")
  //   .max(50, "Too Long!")
  //   .required("Lastname is required"),
  // phoneNumber: Yup.string()
  //   .required("Phone number is required")
  //   .matches(
  //     /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
  //     "Invalid phone number"
  //   ),
  // email: Yup.string().email().required("Email is required"),
  // password: Yup.string()
  //   .required("Password is required")
  //   .min(6, "Password is too short - should be 6 chars minimum"),


  const SignUpSchema = Yup.object().shape({
    category: Yup.string().required("Category is required"),
    color: Yup.string().required("Color is required"),
    list: Yup.array().required("Provide at least one tag"),
    hours: Yup.array().required("Provide at least one tag"),
    min: Yup.array().required("Provide at least one tag"),
    timeType: Yup.array().required("Provide at least one tag"),
    telegram: Yup.string(),
    email: Yup.string().email(),
  });

  const navigateTo = () => {
    navigate('/categories')
  }


  return (
    <Wrapper>
      <div className="content">
        <Formik
          validationSchema={SignUpSchema}
          onSubmit={(e) => {
            setTaskList((prev) => [e, ...prev])
            setEditList([e])
            navigateTo()
          }}
          initialValues={{
            category: '',
            color: '',
            email: '',
            hours: [],
            list: [],
            min: [],
            telegram: '',
            timeType: [],
          }}
        >
          {({
              handleSubmit,
              errors,
            touched
            }) => {
            return (
              <form method="GET" noValidate onSubmit={handleSubmit} className='form-applicant-list'>
                <div className="task_main">
                  <div className="task_header">
                    <div className="task_header_content">
                      <button>
                        <img src={left} alt=""/>
                      </button>

                      <div className="task_title">
                        <img src={see} alt=""/>
                        <h4>View Task details & Notes</h4>
                      </div>
                    </div>
                  </div>

                  <div className="task_container">
                    <div className="task_form">
                      <div className="task_form_content">

                          <div className="task_form_item1_title">
                            <img src={category} alt=""/>
                            <h4>Categories</h4>
                          </div>

                          <Field name="category">{({field, form}) => {
                            return (
                              <>
                                <div className="task_form_item1_button">

                                  {categoryButtons.map(btn => (
                                    <button key={btn.title}
                                            onClick={() => {
                                              form.setFieldValue('category', btn.key)
                                              setIsDisabledCategoryBtn(btn.key)
                                            }}>
                                      <img src={add} alt=""/>
                                      {btn.title}
                                    </button>
                                  ))}
                                </div>
                                {/*<CreateCategories*/}
                                <div className='category_create' style={{display: 'flex'}}>
                                  <SelectInput
                                    titleClass='fw-700 gray-color'
                                    cls='category_select'
                                    labelTitle={'Add category'}
                                    name={field.name}
                                    selected={field.value}
                                    items={categories}
                                    classNamePrefix='select'
                                    isClearable={false}
                                    onChange={(e) => {
                                      form.setFieldValue(field.name, e ? e.label : '')
                                    }}
                                    placeholder={'All'}
                                    onInputChange={(e) => {
                                      setIsDisabledCategoryBtn('')
                                      !_.isEmpty(e) && setValue({value: e.replace(' ', '_'), label: e})
                                    }}
                                  />
                                  {_.isEmpty(isDisabledCategoryBtn) && <button
                                    onClick={() => {
                                      setCategories([value, ...categories])
                                    }}>
                                    Added
                                  </button>}
                                </div>
                                {errors.category ? errors.category : ""}
                              </>

                            )
                          }}
                          </Field>


                          {!_.isEmpty(categoryListCount) && categoryListCount.map((item, index) => {
                            return (
                              <div key={index}>
                                <hr/>
                                <br/>

                                <div className="task_form_item2_title">
                                  <img src={color} alt=""/>
                                  <h4>Color</h4>
                                  <Field name='color'>{({field, form}) => {
                                    return (
                                      <>
                                        {errors.color ? errors.color : ""}

                                        {categoryColors.map(v => {
                                          return (

                                            <span
                                              style={{
                                                background: v,
                                                width: activeColor === v ? '20px' : '40px'
                                              }}
                                              onClick={() => {
                                                form.setFieldValue(field.name, v)
                                                setActiveColor(v)
                                              }}
                                            />
                                          )
                                        })}
                                      </>
                                    )
                                  }}
                                  </Field>
                                </div>

                                <div className="create_list">
                                  <Field name={`list[${index}]`}>{({field, form}) => {
                                    return (
                                      <>
                                        <input
                                          type="text"
                                          name={field.name}
                                          value={field.value}
                                          onChange={(e) => {
                                            form.setFieldValue(field.name, e && e ? e.target.value : '')
                                          }}
                                        />
                                        {errors.list ? errors.list : ""}
                                      </>
                                    )
                                  }}
                                  </Field>
                                  <br/>
                                  <br/>
                                </div>

                                <div className="task_input_clock">

                                  <img src={clocke} alt=""/>


                                  <Field name={`hours[${index}]`}>{({field, form}) => {
                                    return (
                                      <>
                                        <SelectInput
                                          name={field.name}
                                          items={timeHours}
                                          selected={+field.value}
                                          onChange={(e) => {
                                            form.setFieldValue(field.name, e && e.value ? `${e.value}` : '')
                                          }}
                                          isClearable={false}
                                          placeholder={'hours'}
                                        />
                                        {errors.hours ? errors.hours : ""}
                                      </>
                                    )
                                  }}
                                  </Field>
                                  <Field name={`min[${index}]`}>{({field, form}) => {
                                    return (
                                      <>
                                        <SelectInput
                                          name={field.name}
                                          selected={+field.value}
                                          items={timeMinutes}
                                          onChange={(e) => {
                                            form.setFieldValue(field.name, e && e.value ? `${e.value}` : '')
                                          }}
                                          isClearable={false}
                                          placeholder={'minuts'}
                                        />
                                        {errors.min ? errors.min : ""}
                                      </>
                                    )
                                  }}</Field>
                                  <Field name={`timeType[${index}]`}>{({field, form}) => {
                                    return (
                                      <>
                                        <SelectInput
                                          name={field.name}
                                          selected={field.value}
                                          items={dateType}
                                          onChange={(e) => {
                                            form.setFieldValue(field.name, e && e.value ? e.value : '')
                                          }}
                                          isClearable={false}
                                          placeholder={'timeFormat'}
                                        />
                                        {errors.timeType ? errors.timeType : ""}
                                      </>
                                    )
                                  }}</Field>


                                  <button onClick={() => {
                                    setCategoryListCount(categoryListCount.filter(v => v !== item))
                                  }}>Delete
                                  </button>
                                </div>
                                <br/>
                                <hr/>

                              </div>
                            )
                          })}

                          <button onClick={() => {
                            setCategoryListCount([...categoryListCount, _.uniqueId('key_')])
                          }}>Add
                          </button>


                          <div className="task_notification">
                            <img src={notifications} alt=""/>
                            <h4>Notification</h4>
                          </div>
                          <div className="task_radiobtn">
                            <div className="task_radiobtn_input">
                              <Field name='email'>{({field, form}) => {
                                return (
                                  <>
                                    <input
                                      type="text"
                                      id="mail"
                                      name={field.name}
                                      value={field.value}
                                      onChange={(e) => {
                                        form.setFieldValue(field.name, e && e ? e.target.value : '')
                                      }}
                                    />
                                    {errors.email ? errors.email : ""}
                                  </>
                                )
                              }}
                              </Field>
                              <label htmlFor="mail">
                                <img src={mail} alt=""/>
                                <h4>Mail</h4>
                              </label>
                            </div>
                            <div className="task_radiobtn_input">
                              <Field name='telegram'>{({field, form}) => {
                                return (
                                  <>
                                    <input
                                      type="text"
                                      id="telegram"
                                      name={field.name}
                                      value={field.value}
                                      onChange={(e) => {
                                        form.setFieldValue(field.name, e && e ? e.target.value : '')
                                      }}
                                    />
                                    {errors.telegram ? errors.telegram : ""}
                                  </>
                                )
                              }}
                              </Field>


                              <label htmlFor="telegram">
                                <img src={telegram} alt=""/>
                                <h4>Telegram</h4>
                              </label>
                            </div>
                          </div>
                        </div>



                      </div>
                      <div className="task_button">
                        {/*<Link to="/categories">*/}
                        <button type='submit'>Save</button>
                        {/*</Link>*/}
                        <button>Cancel</button>
                      </div>
                    </div>

                  </div>


              </form>
            )
          }}
        </Formik>
      </div>
    </Wrapper>
  );
}

export default Tasks;