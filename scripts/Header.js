const Header = ({ initialDate, finalDate }) => {
        return (
            <div>
                <h1>Reserva de hoteles</h1>
                <p>Desde el {initialDate.format("dddd LL")} {finalDate ? `hasta el ${finalDate.format("dddd LL")}` : ''}</p>
            </div>
        )
    }
