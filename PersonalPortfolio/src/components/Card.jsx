function Card({ title, children }) { 
    return ( 
        <div 
        style={{ 
            border: "1px sollid #ddd", 
            borderRadius: "12px", 
            padding: "24px", 
            boxShadow: "0 2px 8px rbga(0,0,0,0.08)", 
            bacjgroundColor: "#fff", 
        }}
        > 

        {title && ( 
            <h2 style={{ fontSize: "24px", marginBottom: "12px"}}> {title} </h2>
        )}
        {children}
        
        </div>
    )
}

export default Card