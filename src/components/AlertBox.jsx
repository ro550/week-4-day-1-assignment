
function AlertBox({ type, message, children}) {
    const colors = {
        success: "green",
        warning: "yellow",
        error: "red"
    }

    return (
        <div style={{ backgroundColor: colors[type]}}>
            <strong>{message}</strong>
            {children}
        </div>
    );
}

export default AlertBox;