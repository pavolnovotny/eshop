import type {InferGetStaticPropsType} from "next";
import {Fragment} from "react";
import {getAllProducts} from "@framework/product";
import {getConfig} from "@framework/api/config";
import {Layout} from "@components/common";
import {ProductCard} from "@components/product";
import {Grid, Hero, Marquee} from "@components/ui";


export default function Home({products}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <Fragment>
      <Grid>
        {products.slice(0,3).map(product => <ProductCard key={product.id} product={product}/>)}
      </Grid>
      <Hero headline="test" description="Gingerbread soufflé pie wafer donut soufflé chocolate bar. Shortbread lemon drops sugar plum bonbon topping gummies. Cake dragée pie jelly candy sesame snaps oat cake gingerbread fruitcake. Lemon drops sugar plum powder powder jelly chocolate cake caramels wafer. Caramels dragée donut gummies jujubes chocolate bar. Jelly-o donut jelly-o lemon drops caramels tiramisu topping jelly. Jujubes danish liquorice jelly beans sugar plum jelly-o ice cream marzipan marshmallow. Wafer gingerbread muffin lemon drops croissant gingerbread. Jelly-o pudding dessert halvah halvah sweet roll sweet roll sweet jelly-o."/>
      <Marquee>
        {products.slice(0,3).map(product => <ProductCard key={product.id} variant='slim' product={product}/>)}
      </Marquee>
      <Grid layout="B">
        { products.slice(0,3).map(product =>
          <ProductCard
            key={product.id}
            product={product}
          />
        )}
      </Grid>
      <Marquee variant="secondary">
        {products.slice(0,3).map(product => <ProductCard key={product.id} variant='slim' product={product}/>)}
      </Marquee>
    </Fragment>
  )
}

Home.Layout = Layout

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllProducts(config)

  return {
    props: {
       products
    },
    revalidate: 4*60*60
  }
}
