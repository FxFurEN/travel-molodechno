<template>
    <div>
        <figure>
            <img :src="images" alt="Landmark Image">
            <figcaption>{{ name }}</figcaption>
        </figure>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        images: String
    }
}
</script>

<style lang="scss" scoped>
figure {
    position: relative;  // Чтобы позиционировать относительно контейнера
    display: grid;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    figcaption {
            display: grid;
            align-items: end;
            font-family: sans-serif;
            font-size: 2.3rem;
            font-weight: bold;
            color: #0000;
            padding: .75rem;
            background: var(--c,#0009);
            clip-path: inset(0 var(--_i,100%) 0 0);
            -webkit-mask: linear-gradient(#000 0 0), linear-gradient(#000 0 0);
            -webkit-mask-composite: xor;
            -webkit-mask-clip: text, padding-box;
            margin: -1px;
}
}
figure > * {
  grid-area: 1/1;
  transition: .4s;
}
figure:hover figcaption{
  --_i: 0%;
}
figure:hover img {
  transform: scale(1.2);
}
@supports not (-webkit-mask-clip: text) {
  figure figcaption {
   -webkit-mask: none;
   color: #fff;
  }
}
</style>
