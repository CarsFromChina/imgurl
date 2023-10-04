var currentImageIndex = 0;

    function openModal(imageUrl) {
      var modal = document.getElementById("myModal");
      var modalImage = document.getElementById("modalImage");
      var thumbnailContainer = document.getElementById("thumbnailContainer");
      var counter = document.getElementById("counter");

      modal.style.display = "block";
      modalImage.src = imageUrl;
      counter.innerHTML = "图片 " + (currentImageIndex + 1) + " / " + images.length;

      // 清空缩略图容器
      thumbnailContainer.innerHTML = "";

      // 创建并添加缩略图
      for (var i = 0; i < images.length; i++) {
        var thumbnail = document.createElement("img");
        thumbnail.src = images[i];
        thumbnail.alt = "Thumbnail " + (i + 1);
        thumbnail.onclick = function(index) {
          return function() {
            currentImageIndex = index;
            modalImage.src = images[index];
            counter.innerHTML = "图片 " + (currentImageIndex + 1) + " / " + images.length;
          };
        }(i);
        thumbnailContainer.appendChild(thumbnail);
      }
    }

    function closeModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    }

    function prevImage() {
      if (currentImageIndex > 0) {
        currentImageIndex--;
        var modalImage = document.getElementById("modalImage");
        modalImage.src = images[currentImageIndex];
        var counter = document.getElementById("counter");
        counter.innerHTML = "图片 " + (currentImageIndex + 1) + " / " + images.length;
      }
    }

    function nextImage() {
      if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        var modalImage = document.getElementById("modalImage");
        modalImage.src = images[currentImageIndex];
        var counter = document.getElementById("counter");
        counter.innerHTML = "图片 " + (currentImageIndex + 1) + " / " + images.length;
      }
    }

    // 初始化图库
    var gallery = document.querySelector(".gallery");

    // 添加图片到图库
    images.forEach(function(imageUrl) {
      var img = document.createElement("img");
      img.src = imageUrl;
      img.onclick = function() {
        // 点击图片时打开模态框
        openModal(imageUrl);
      };
      gallery.appendChild(img);
    });