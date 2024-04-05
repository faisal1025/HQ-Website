import React from 'react'

const Forgot = () => {
  return (
    // onSubmit={handleSubmit}
    <form autoComplete="off" autoSave="off" className="w-full" > 
      <input
        className="rounded-full my-1 dark:bg-slate-500 dark:text-white mb-1 text-base w-full p-4 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
        autoComplete="off"
        type="email"
        placeholder="Enter Your registered email"
        name="identifier"
        // value={values.identifier}
        // onChange={handleChange}
        // onBlur={handleBlur}
      />
   
      {/* {errors.password && touched.password ? <p className="text-sm text-red-500">{errors.password}</p>:null} */}
      <button type="submit" className="rounded-full my-4 bg-gradient-to-r from-slate-500 to-slate-950 w-full text-white h-12 active:scale-75 transition hover:opacity-80">
        Send
      </button>
    </form>
  )
}

export default Forgot