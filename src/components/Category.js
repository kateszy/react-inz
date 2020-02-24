import React from 'react'
import categoryShoes from '../mockData/categoryShoes'
import {Button,Card, Image} from 'react-bootstrap'

class Category extends React.Component {

    state = {
        data: categoryShoes,
        currentCategory: this.props.chosenCategory
    }

    // gdy aktualna kategoria jest inna niz w props, aktualizuje stan i odswieza komponent
    static getDerivedStateFromProps(props, state) {
        if (props.chosenCategory !== state.currentCategory) {
          return {
            currentCategory: props.chosenCategory
          };
        }
        return null;
      }

    loadData(val) {
        console.log("loading data");
        fetch('https://mojeapi.com/category/' + val)
            .then(response => response.json())
            .then(data => {
                this.setState({ data: data });
            })
            .catch(err => console.error(this.props.url, err.toString()))
    }

    render() {
        this.loadData(this.state.currentCategory)
        const objects = this.state.data.map( (data) =>{
            return(
                <Card key = {data.id}>
                    <Card.Body>
                        <Card.Title>{data.brand} - {data.title}</Card.Title>
                        <Image src={data.picture}  />
                        <Card.Text>{data.about}</Card.Text>
                        <Card.Text>{data.price} zł</Card.Text>
                        
                    </Card.Body>
                </Card>
            )
        }
        )
        return (<div>
            This is {this.state.currentCategory}
            {objects}
        </div>)
    }
}

export default Category