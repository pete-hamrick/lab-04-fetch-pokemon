import { Component } from 'react';

class PokeDetail extends Component {
    state = { data: {} };

    loadData = async () => {
        const { id } = this.props.match.params;
        const url = `https://pokedex-alchemy.herokuapp.com/api/pokedex/${id}`;
        const resp = await fetch(url);
        const data = await resp.json();
        this.setState({ data });
    };

    componentDidMount() {
        this.loadData();
    }

    render() {
        // const { id } = this.props.match.params;
        const { data } = this.state;
        return (
            <section>
                <h1>{data.pokemon}</h1>
                <div className="poke-detail">
                    <img src={data.url_image} alt="poke" />
                </div>
            </section>
        );
    }
}

export default PokeDetail;