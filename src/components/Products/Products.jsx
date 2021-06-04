import { Grid } from '@material-ui/core';
import Product from './Product/Product';

import useStyles from './styles';

// const products = [
//     { key: 1, name: 'Shoes', description: 'Running Shoes', price: '$5', image:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/asics-patriot10-zapatillas-running-oficina-1541685872.png?crop=1xw:1xh;center,top&resize=480:*' },
//     { key: 2, name: 'Macbook', description: 'Apple macbook', price: '$10', image:'https://www.compudemano.com/wp-content/uploads/2018/03/macbook-air-2017-4.jpg' },
// ]

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify ="center" spacing={4}>
                {
                    products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} lg={3}>
                            <Product product={product} onAddToCart={ onAddToCart } />
                        </Grid>
                    ))
                }
            </Grid>
        </main>
    )
}

export default Products;
