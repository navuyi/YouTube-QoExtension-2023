import { api } from '../../../../API/api'
import { DateTime } from 'luxon'
import { VariablesStorage } from '../../../../utils/storage/ChromeStorage'
import { useFormik } from 'formik'
import { object, number, string, ObjectSchema } from 'yup'
import { usePostExperimentMutation } from '../../redux/api/endpoints/experiment'
import { dark } from '@mui/material/styles/createPalette'

export interface form {
  subjectAge: number
  subjectSex: 'male' | 'female' | 'undisclosed' | ''
}
const initialForm: form = {
  subjectAge: 18,
  subjectSex: 'male',
}

const FormSchema: ObjectSchema<form> = object({
  subjectSex: string<'male' | 'female' | 'undisclosed'>().required('Subject sex is required'),
  subjectAge: number().typeError('Subject age must be a number').min(1, 'Subject age must be greater than 0').required('Subject age is required'),
})

export const useExperimentStart = () => {
  const [postExperiment, { isLoading: postingExperiment, error }] = usePostExperimentMutation()

  const handleSubmit = async (values: form) => {
    console.log(values)
    await postExperiment({
      ...values,
      started: DateTime.now().toISO(),
    })
      .unwrap()
      .then(async (data) => {
        await startExperiment(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const startExperiment = async (experiment) => {
    console.log(experiment)
    await VariablesStorage.setItem('running', true)
    await VariablesStorage.setItem('experimentID', experiment.id)
    window.location.href = 'https://www.youtube.com/'
  }

  const formik = useFormik({
    initialValues: initialForm,
    onSubmit: handleSubmit,
    validationSchema: FormSchema,
  })

  return { formik, postingExperiment }
}
