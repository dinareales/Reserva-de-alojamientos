const {
    Typography,
    TextField
  } = MaterialUI;

const Filters = ({
    initialDate,
    finalDate,
}) => {
    return (<div className="filters">
        <Typography variant="body2" color="primary" align="center">Soy la tipografias</Typography>
        <TextField
            variant="outlined"
            className="filter"
            type="date"
            InputLabelProps={{
            shrink: true,
            }}
            value={initialDate.format('YYYY-MM-DD')}
            formatDate={(date) => moment(date).format('DD-MM-YYYY')}

        />
        <TextField
            className="filter"
            type="date"
            min={initialDate.format('YYYY-MM-DD')}
            value={finalDate ? finalDate.format('YYYY-MM-DD') : ''}
        />
    </div>)
}