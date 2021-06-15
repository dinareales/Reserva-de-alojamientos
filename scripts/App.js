class App extends React.Component {
    state = {
        dates: {
            initialDate: moment().locale('es'),
            finalDate: null,
        },
    }
  
    render() {
        const { dates } = this.state;
        return (
            <div>
                <Header {...dates}/>
                <Filters
                {...dates} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))