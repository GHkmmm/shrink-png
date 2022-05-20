/*
 * @Author: guoming1.huang
 * @Date: 2022-05-19 18:12:47
 * @LastEditors: guoming1.huang
 * @LastEditTime: 2022-05-20 15:13:03
 * @FilePath: /shrinkjs/src/main.js
 * @Description:
 *
 * Copyright (c) 2022 by tumax_guoming.huang, All Rights Reserved.
 */
import Shrink from "./shrink.js";

document.getElementById("imgUpFile").addEventListener("change", async (e) => {
  const img_origin = document.getElementById("img_origin");
  const img_compress = document.getElementById("img_compress");

  const file = e.target.files[0];
  const shrink = new Shrink(file, {
    quality: 80,
  });
  const _file = await shrink.shrinkImage();

  img_origin.src = await getUrlByFile(file);
  img_compress.src = await getUrlByFile(_file);
});

function getUrlByFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      resolve(e.target.result);
    };
  });
}
