import React from 'react'

export default function Navbar({userData}) {
  return (
    <div>
        <nav>
            <div>
                <span>{userData.data?.user.name}</span>
                <span>{userData.data?.user.studentId}</span>
            </div>
        </nav>

    </div>
  )
}
