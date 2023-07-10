// Imports
import Head from "next/head"
import * as yup from "yup"
import Link from "next/link"
// import { useRouter } from "next/router"
// import { useContext } from "react"

// import AppContext from "@/web/components/AppContext"
import Button from "@/web/components/Button.jsx"
import Main from "@/web/components/Main"
import Form from "@/web/components/Form"
import FormField from "@/web/components/FormField"
import Footer from "@/web/components/Footer"

// Form attributes
const initialValues = {
  username: "",
  password: "",
}

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required").label("Username"),
  password: yup.string().min(8).required("Password is required").label("Password"),
})

// SignIn function
const SignIn = () => {
  // const router = useRouter()
  // const {
  //   actions: { signIn },
  // } = useContext(AppContext)
  
  // Function to be executed when the form is submitted
/*  const handleSubmit = async (values) => {
    const { username, password } = values
    const [err] = await signIn(username, password)
  
    if (!err) {
      router.push("/scan-page")
    }
  }*/

  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.svg" />
          <title>Net Mapper</title>
      </Head>
      <Main>
        <br />
        <Form
          title="Sign In"
          initialValues={initialValues}
          validationSchema={validationSchema}
          // onSubmit={handleSubmit}
        >
          <span className="text-sm">You don&apos;t have an account ? <br /><Link href="/sign-up" className="text-pink-500">Create one</Link></span><br /><br />
          <label>Username:</label>
          <FormField
            name="username"
            type="text"
            placeholder="jdoe"
            label="Username"
          />
          <br />
          <label>Password:</label>
          <FormField
            name="password"
            type="password"
            placeholder="Pa$$w0rd"
            label="Password"
          />
          <br />
          <br />
          <Button btnLabel="Log in" />
        </Form>
      </Main>
      <Footer />
    </>
  )
}

export default SignIn
