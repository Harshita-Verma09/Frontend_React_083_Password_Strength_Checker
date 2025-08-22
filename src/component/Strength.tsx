import React, { useState } from 'react'
import { useToggle } from '../custom/useToggle'

const Strength = () => {
    const [showPassword, toggle] = useToggle(false)
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<string | null>(null)

    const getStrengthColor = () => {
        if (password.length === 0) return "transparent"
        if (password.length < 4) return "#ff4d4f" // weak
        if (password.length < 8) return "#ffc107" // medium
        return "#28a745" // strong
    }

    
    const handlePasswordCheck = () => {
        if (password.length < 3) {
            setError("Weak Password")
        } else {
            setError(null)
            alert("Strong enough password!")
        }
    }

    return (
        <div
            style={{
                backgroundColor: "#0d0d0d",
                color: "#ffffff",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                padding: "1rem",
            }}
        >
            <div
                style={{
                    background: "rgba(30, 30, 30, 0.85)",
                    padding: "2.5rem",
                    borderRadius: "16px",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(219, 7, 7, 0.1)",
                    width: "100%",
                    maxWidth: "420px",
                    transition: "all 0.3s ease-in-out",
                }}
            >
                <h2
                    style={{
                        textAlign: "center",
                        marginBottom: "2rem",
                        fontSize: "1.5rem",
                        letterSpacing: "1px",
                    }}
                >
                    Password Strength Checker
                </h2>

                <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    style={{
                        padding: "0.9rem",
                        width: "100%",
                        backgroundColor: "#1f1f1f",
                        color: "#fff",
                        border: error ? "1px solid #ff4d4f" : "1px solid #444",
                        borderRadius: "10px",
                        outline: "none",
                        marginBottom: "1rem",
                        fontSize: "1rem",
                    }}
                />

                {/* Strength Meter */}
                <div
                    style={{
                        height: "6px",
                        backgroundColor: "#333",
                        borderRadius: "15px",
                        overflow: "hidden",
                        marginBottom: "1.2rem",
                    }}
                >
                    <div
                        style={{
                            width: `${Math.min(password.length * 10, 100)}%`,
                            height: "100%",
                            backgroundColor: getStrengthColor(),
                            transition: "width 0.3s ease, background-color 0.3s ease",
                        }}
                    />
                </div>

                <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem" }}>
                    <button
                        onClick={toggle}
                        style={{
                            flex: 1,
                            padding: "0.75rem",
                            backgroundColor: "#292929",
                            color: "#fff",
                            border: "1px solid #555",
                            borderRadius: "8px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            transition: "all 0.3s",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        }}
                        onMouseOver={(e) =>
                            (e.currentTarget.style.backgroundColor = "#404040")
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.style.backgroundColor = "#292929")
                        }
                    >
                        {showPassword ? " Hide" : "Show"}
                    </button>

                    <button
                        onClick={handlePasswordCheck}
                        style={{
                            flex: 1,
                            padding: "0.75rem",
                            background: "linear-gradient(90deg, #007bff, #0056b3)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            transition: "background 0.3s ease",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                        }}
                        onMouseOver={(e) =>
                            (e.currentTarget.style.opacity = "0.9")
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.style.opacity = "1")
                        }
                    >
                        Check
                    </button>
                </div>

                {error && (
                    <p
                        style={{
                            color: "#ff4d4f",
                            fontSize: "0.9rem",
                            textAlign: "center",
                            marginTop: "0.5rem",
                            animation: "fadeIn 0.4s ease",
                        }}
                    >
                        {error}
                    </p>
                )}
            </div>
        </div>
    )
}

export default Strength
