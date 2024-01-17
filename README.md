# Typescript로 구현해 보는 KMeans

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

## [🍩 more stories on my blog](https://formegusto.tistory.com/search/typescript%EB%A1%9C%20%EA%B5%AC%ED%98%84%ED%95%B4%20%EB%B3%B4%EB%8A%94%20KMeans)

<table>
  <tbody>
    <tr>
      <td align="center">
        1
      </td>
      <td align="center">
        2
      </td>
      <td align="center">
        3
      </td>
    </tr>
    <tr>
      <td align="center">
        <img src="https://github.com/formegusto/kmeans-ts/assets/52296323/8e757bce-315e-4868-a2d6-3fbdd606848d" alt="iter bingle bingle" width="150px" height="150px"/>
      </td>
      <td align="center">
        <img src="https://github.com/formegusto/kmeans-ts/assets/52296323/2afee5d7-659e-435b-a711-e31624fec844" alt="eojil eojil my first ai" width="150px" height="150px"/>
      </td>
      <td align="center">
        <img src="https://github.com/formegusto/kmeans-ts/assets/52296323/0f1cb70f-9890-46f9-955b-59e16db7f343" alt="jeongli kkeut" width="150px" height="150px"/>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://formegusto.tistory.com/5">Javascript Iteration Protocol</a></td>
      <td align="center">KMeans and KMeans++ Difference</td>
      <td align="center">KMeans++ with Typescript</td>
    </tr>
    <tr>
      <td>Javascript Iteration Protocol은 ES6 이후에 도입된 순회 가능한 데이터 컬렉션을 표현하는 규칙입니다. 이전에 문자열이나 배열 등의 저희가 잘 아는 데이터 컬렉션들은 각자 나름의 규칙을 가지고 순회를 했다고 하는데요.</td>
      <td>군집화(Clustering)는 데이터 집합 내 데이터에 유사성(Similarity)을 측정하는 계산식을 기반으로 여러 개의 군집(Cluster)으로 분류하는 비지도 학습(Unsupervised Learning)의 패러다임 중 하나입니다.</td>
      <td>구현적인 면에서 조금 더 다양한 시도를 할 수 있는 KMeans++를 작성해 보도록 하겠습니다. 그리고 끝에는 Iteration Protocol을 적용해보기도 하고요. 저번 챕터에서 은근슬쩍 파이썬으로 구현해 봤기 때문에 어렵지 않을 거예요. </td>
    </tr>
  </tbody>
</table>
