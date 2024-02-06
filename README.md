# 📚 Typescript로 구현해 보는 KMeans

## 📕 initial settings

```jsx
/* download code */
git clone https://github.com/formegusto/kmeans-ts.git
cd kmeans-ts

/* install package */
npm install or yarn

/* make required directory */
mkdir output
```

## 📗 generate random point dataset

```jsx
/* Please check the output folder after execution! */
npm run gen-dataset -- -l 100
or
yarn gen-dataset -l <data length>
```

## 📘 run kmeans

```jsx
/* Please check the output folder after execution! */
npm run kmeans -- -f <dataset-filename> -t <result | steps, output file type> -k <HyperParameter>
or
yarn kmeans -f <dataset-filename> -t <result | steps, output file type> -k <HyperParameter>
```

## [🍩 more stories on my blog](https://formegusto.tistory.com/search/Typescript%EB%A1%9C%20%EA%B5%AC%ED%98%84%ED%95%B4%20%EB%B3%B4%EB%8A%94%20KMeans)
<a href="https://formegusto.tistory.com/entry/Typescript-%EB%A1%9C-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EB%8A%94-KMeans-1-Javascript-Iteration-Protocol" target="_blank">
  <img src="https://github.com/formegusto/kmeans-ts/assets/52296323/30bcf2d9-01dd-4e37-b051-ad8bd531f276" alt="iter bingle bingle"/>
</a>
<a href="https://formegusto.tistory.com/entry/Typescript%EB%A1%9C-%EA%B5%AC%ED%98%84%ED%95%B4-%EB%B3%B4%EB%8A%94-KMeans-2-KMeans-and-KMeans-Difference" target="_blank">
  <img src="https://github.com/formegusto/kmeans-ts/assets/52296323/da82ec88-c758-4efd-9194-6ebab324d293" alt="eojil eojil my first ai"/>
</a>
<a href="https://formegusto.tistory.com/entry/Typescript%EB%A1%9C-%EA%B5%AC%ED%98%84%ED%95%B4-%EB%B3%B4%EB%8A%94-KMeans-3-KMeans-with-Typescript" target="_blank">
  <img src="https://github.com/formegusto/kmeans-ts/assets/52296323/13022ef7-f58a-41b9-889d-8e3269873dd6" alt="jeonli kkeut"/>
</a>
