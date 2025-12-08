export function EducationBackground({ children }) {
  return (
    <div className="relative w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/login_background.png')",
      }}
    >
      {/* overlay for opacity */}
      <div className="absolute inset-0 opacity-50"></div>

      {/* Content on top */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}


