function Card({ title, children }) { 
    return ( 
        <div 
        style={{ 
            border: "1px solid #bcbcc2", 
            borderRadius: "12px", 
            padding: "24px", 
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)", 
            backgroundColor: "#656669", 
            width: "600px",
            boxSizing: "border-box", 
        }}
        > 

        {title && ( 
            <h2 style={{ fontSize: "24px", marginBottom: "12px", color: "Black", textAlign: "center"}}> {title} </h2>
        )}
        {children}
        
        </div>
    )
}

export default Card