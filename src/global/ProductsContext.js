import React ,{createContext} from "react";
import { db } from "../config/Config";
export const ProductsContext = createContext();
export class ProductsContextProvider extends React.Component {
    state = {
        products: []}
    componentDidMount() {
        const prevProducts = this.state.products;
        db.collection('products').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type === 'added') {
                    prevProducts.push({
                        id: change.doc.id,
                        name: change.doc.data().name,
                        price: change.doc.data().price,
                        currency: change.doc.data().currency,
                        featured:change.doc.data().featured,
                        image: change.doc.data().image,
                        category: change.doc.data().category,
                        alt: change.doc.data().alt,
                        description: change.doc.data().description })}
                this.setState({
                    products: prevProducts}) })})}
    render() {
        return (
            <ProductsContext.Provider value={{ products: [...this.state.products] }}>
                {this.props.children}
            </ProductsContext.Provider>)}}

