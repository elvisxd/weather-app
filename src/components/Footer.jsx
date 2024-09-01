

const Footer = () => {
  return (
    <footer className=" text-gray-100 py-4"><br />
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} My Weather App. All rights reserved.</p>
        <div className="mt-2">
          <a href="/privacy" className="text-gray-100  hover:underline mx-2">Privacy Policy</a>
          <a href="https://elvisxd.github.io/webside-curriculum/" className="text-gray-100 hover:underline mx-2">My Portfolio</a>
          <a href="mailto:elvisreyxd@gmail.com" className="text-gray-100  hover:underline mx-2">Contact Me</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer