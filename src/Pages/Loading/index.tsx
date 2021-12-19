// @ts-nocheck
import { useEffect } from 'react';
import loadingImg from '../../imgs/loading.gif';
import antoniImg from '../../imgs/antoni.jpg';
import backenvImg from '../../imgs/backenv.jpg';
import bgImg from '../../imgs/bg.jpg';
import comLogoImg from '../../imgs/com-logo.png';
import countdownImg from '../../imgs/countdown.jpeg';
import flowerImg from '../../imgs/flower.png';
import heroImg from '../../imgs/hero.jpg';
import intimateImg from '../../imgs/intimate.jpg';
import imgPrewedOne from '../../imgs/prewed-one.jpg';
import imgPrewedTwo from '../../imgs/prewed-two.jpg';
import imgPrewedThree from '../../imgs/prewed-three.jpg';
import sinthiaImg from '../../imgs/sinthia.jpg';
import galeryOne from '../../imgs/galeryOne.jpg';
import galeryTwo from '../../imgs/galeryTwo.jpg';
import galeryThree from '../../imgs/galeryThree.jpg';
import galeryFour from '../../imgs/galeryFour.jpg';
import galeryFive from '../../imgs/galeryFive.jpg';
import galerySix from '../../imgs/galerySix.jpg';
import galerySeven from '../../imgs/galerySeven.jpg';
import galeryEight from '../../imgs/galeryEight.jpg';

import './Loading.css';

const preloadImages = (imagesAssets, onComplete) => {

  const assetLength = imagesAssets.length;
  let assetLoaded = 0;

  const onImageLoaded = (_event) => {
    assetLoaded = assetLoaded + 1;
    if (assetLoaded === assetLength){
      onComplete();
    }
  }

  for (let index = 0; index < imagesAssets.length; index++) {
    const imgAsset = imagesAssets[index];
    var image = new Image();
    image.src = imgAsset;
    image.onload = onImageLoaded;
  }
  
}

interface LoadingParamsType {
  isLoading: boolean,
  setIsLoading: any,
}
function Loading({ setIsLoading }: LoadingParamsType) {

  useEffect(()=>{
    const preloadedImagesAssets = [
      antoniImg,
      backenvImg,
      bgImg,
      comLogoImg,
      countdownImg,
      flowerImg,
      heroImg,
      intimateImg,
      imgPrewedOne,
      imgPrewedTwo,
      imgPrewedThree,
      sinthiaImg,
      galeryOne,
      galeryTwo,
      galeryThree,
      galeryFour,
      galeryFive,
      galerySix,
      galerySeven,
      galeryEight,
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI0NHB4IiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzliOTQ5YiI+PHBhdGggZD0iTTcyNS4yOSAxMDEuMkMzMjUuMjIgMTIyLjQ4IDAgMCAwIDB2MTQwaDEyODBWMHMtMTU0LjY0IDc5LjkyLTU1NC43MSAxMDEuMnoiIGZpbGwtb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNNTU2LjQ1IDExOS43NEM5NTMuNDEgMTQwIDEyODAgMTQgMTI4MCAxNHYxMjZIMFYwczE1OS41IDk5LjQ4IDU1Ni40NSAxMTkuNzR6IiBmaWxsLW9wYWNpdHk9Ii41Ii8+PHBhdGggZD0iTTY0MCAxNDBjMzUzLjQ2IDAgNjQwLTE0MCA2NDAtMTM5djE0MEgwVjBzMjg2LjU0IDE0MCA2NDAgMTQweiIvPjwvZz48L3N2Zz4=',
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI0OXB4IiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTEyODAgMy40QzEwNTAuNTkgMTggMTAxOS40IDg0Ljg5IDczNC40MiA4NC44OWMtMzIwIDAtMzIwLTg0LjMtNjQwLTg0LjNDNTkuNC41OSAyOC4yIDEuNiAwIDMuNFYxNDBoMTI4MHoiIGZpbGwtb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNMCAyNC4zMWM0My40Ni01LjY5IDk0LjU2LTkuMjUgMTU4LjQyLTkuMjUgMzIwIDAgMzIwIDg5LjI0IDY0MCA4OS4yNCAyNTYuMTMgMCAzMDcuMjgtNTcuMTYgNDgxLjU4LTgwVjE0MEgweiIgZmlsbC1vcGFjaXR5PSIuNSIvPjxwYXRoIGQ9Ik0xMjgwIDUxLjc2Yy0yMDEgMTIuNDktMjQyLjQzIDUzLjQtNTEzLjU4IDUzLjQtMzIwIDAtMzIwLTU3LTY0MC01Ny00OC44NS4wMS05MC4yMSAxLjM1LTEyNi40MiAzLjZWMTQwaDEyODB6Ii8+PC9nPjwvc3ZnPg==',
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIzNHB4IiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTcyNS4yOSAxMDEuMkMzMjUuMjIgMTIyLjQ4IDAgMCAwIDB2MTQwaDEyODBWMHMtMTU0LjY0IDc5LjkyLTU1NC43MSAxMDEuMnoiIGZpbGwtb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNNTU2LjQ1IDExOS43NEM5NTMuNDEgMTQwIDEyODAgMTQgMTI4MCAxNHYxMjZIMFYwczE1OS41IDk5LjQ4IDU1Ni40NSAxMTkuNzR6IiBmaWxsLW9wYWNpdHk9Ii41Ii8+PHBhdGggZD0iTTY0MCAxNDBjMzUzLjQ2IDAgNjQwLTE0MCA2NDAtMTM5djE0MEgwVjBzMjg2LjU0IDE0MCA2NDAgMTQweiIvPjwvZz48L3N2Zz4=',
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIzNHB4IiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTcyNS4yOSAxMDEuMkMzMjUuMjIgMTIyLjQ4IDAgMCAwIDB2MTQwaDEyODBWMHMtMTU0LjY0IDc5LjkyLTU1NC43MSAxMDEuMnoiIGZpbGwtb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNNTU2LjQ1IDExOS43NEM5NTMuNDEgMTQwIDEyODAgMTQgMTI4MCAxNHYxMjZIMFYwczE1OS41IDk5LjQ4IDU1Ni40NSAxMTkuNzR6IiBmaWxsLW9wYWNpdHk9Ii41Ii8+PHBhdGggZD0iTTY0MCAxNDBjMzUzLjQ2IDAgNjQwLTE0MCA2NDAtMTM5djE0MEgwVjBzMjg2LjU0IDE0MCA2NDAgMTQweiIvPjwvZz48L3N2Zz4=',
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI1NHB4IiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTEyODAgMy40QzEwNTAuNTkgMTggMTAxOS40IDg0Ljg5IDczNC40MiA4NC44OWMtMzIwIDAtMzIwLTg0LjMtNjQwLTg0LjNDNTkuNC41OSAyOC4yIDEuNiAwIDMuNFYxNDBoMTI4MHoiIGZpbGwtb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNMCAyNC4zMWM0My40Ni01LjY5IDk0LjU2LTkuMjUgMTU4LjQyLTkuMjUgMzIwIDAgMzIwIDg5LjI0IDY0MCA4OS4yNCAyNTYuMTMgMCAzMDcuMjgtNTcuMTYgNDgxLjU4LTgwVjE0MEgweiIgZmlsbC1vcGFjaXR5PSIuNSIvPjxwYXRoIGQ9Ik0xMjgwIDUxLjc2Yy0yMDEgMTIuNDktMjQyLjQzIDUzLjQtNTEzLjU4IDUzLjQtMzIwIDAtMzIwLTU3LTY0MC01Ny00OC44NS4wMS05MC4yMSAxLjM1LTEyNi40MiAzLjZWMTQwaDEyODB6Ii8+PC9nPjwvc3ZnPg==',
    ]
    preloadImages(preloadedImagesAssets, ()=>{
      // setIsLoading(false);
    });

    // setTimeout(()=>{
    //   setIsLoading(false);
    // }, 5000);

  // eslint-disable-next-line
  }, []);

  return (
    <div className="loading-page">
      <img src={loadingImg} alt=""/>
    </div>
  );
}

export default Loading;
