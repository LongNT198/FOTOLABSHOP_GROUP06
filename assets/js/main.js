(function ($) {
    "use strict";

    const products_compare = [

        {
            id: 1,
            deal: 'Best Sellers',
            name: 'PowerShot G7 X Mark III',
            photo: 'images/Categories/BestSeller/PowerShot G7 X Mark III 02.png',
            image2: 'images/Categories/BestSeller/PowerShot G7 X Mark III 01.png',
            price: '$749',
            brand: 'Canon',
            detail: 'product-deotails-1.html',
            category: 'Camera',
            formfactor: 'Compact',
            weight: '304 g',
            AFmode: 'One Shot AF, Servo AF, Manual Focus',
            FlashModes: 'Auto, On, Slow Synchro, Off',
            StillImageFormat: 'JPEG, RAW, C-RAW',
            StandardPowerSupply: 'Battery Pack NB-13L',
            MemoryCardType: 'SD / SDHC* / SDXC* memory cards *Compatible with UHS-I cards',
            ImageResolution: '3:2 5472 x 3648(L) 3648 x 2432(M) 2736 x 1824(S1) 2400 x 1600(S2) 5472 x 3648(RAW/C-RAW)',
        },
        {
            id: 2,
            deal: 'Best Seller',
            name: 'Extender EF 2x III',
            photo: 'images/Categories/BestSeller/Extender EF 2x III 01.jpg',
            image2: 'images/Categories/BestSeller/Extender EF 2x III 02.jpg',
            price: '$383',
            brand: 'Canon',
            detail: 'product-deotails-2.html',
            category: 'Lenses',
            formfactor: 'Telephoto',
            weight: '325g',
            construction: '9 elements in 5 groups',
            productDimensions: '2.09 x 2.83 x 2.83 inches',
            maximumFocalLength: '2.0x magnification factor',
            DustAndWater: 'Dust and water resistant',
        },
        {
            id: 3,
            deal: 'Best Sellers',
            name: 'D7500',
            photo: 'images/Categories/BestSeller/D7500 01.jpg',
            image2: 'images/Categories/BestSeller/D7500 02.jpg',
            price: '$700',
            brand: 'Nikon',
            detail: 'product-deotails-1.html',
            category: 'Camera',
            formfactor: 'DSLR',
            weight: '640 g',
            AFmode: 'Single-servo AF (AF-S); continuous-servo AF (AF-C); auto AF-S/AF-C selection (AF-A); predictive focus tracking activated automatically according to subject status',
            FlashModes: 'Auto, On, Slow Synchro, Off',
            StillImageFormat: 'JPEG, NEF (RAW), NEF (RAW)+JPEG',
            StandardPowerSupply: 'One EN-EL15a Rechargeable Li-ion Battery',
            MemoryCardType: 'SD (Secure Digital) and UHS-I compliant SDHC and SDXC memory cards',
            ImageResolution: 'DX (24x16) 5568 x 3712(L) 4176 x 2784(M) 2784 x 1856(S)',
        },
        {
            id: 4,
            deal: 'Best Seller',
            name: 'PC NIKKOR 19mm f4E ED',
            photo: 'images/Categories/BestSeller/PC NIKKOR 19mm f4E ED 01.jpg',
            image2: 'images/Categories/BestSeller/PC NIKKOR 19mm f4E ED 02.jpg',
            price: '$2,360',
            brand: 'Nikon',
            detail: 'product-deotails-2.html',
            category: 'Lenses',
            formfactor: 'Tilt Shift',
            weight: '885 g',
            construction: '17 elements in 13 groups',
            productDimensions: '4.8 x 3.5 x 3.5 inches',
            maximumFocalLength: 'Maximum Focal Length: 19',
            DustAndWater: '-',
        },
        {
            id: 5,
            deal: 'Best Sellers',
            name: 'a6400 E-mount APS-C',
            photo: 'images/Categories/BestSeller/a6400 E-mount APS-C 01.jpg',
            image2: 'images/Categories/BestSeller/a6400 E-mount APS-C 02.jpg',
            price: '$748',
            brand: 'Sony',
            detail: 'product-deotails-1.html',
            category: 'Camera',
            formfactor: 'Mirrorless',
            weight: '403 g',
            AFmode: 'AF-A, AF-S, AF-C, DMF.',
            FlashModes: 'Flash off, Autoflash, Fill-flash, Slow Sync., Rear Sync., Red-eye reduction (on/off selectable), Wireless control22, Hi-speed sync2',
            StillImageFormat: 'RAW, RAW & JPEG (Extra fine, Fine, Standard), JPEG (Extra fine, Fine, Standard)',
            StandardPowerSupply: 'One rechargeable battery pack NP-FW50',
            MemoryCardType: 'Memory Stick PRO-HG Duo, Memory Stick Micro (M2), SD, SDHC(UHS-I memory card (UHS-I compliant), microSD, microSDHC, microSDXC memory card',
            ImageResolution: 'L: 6000 x 4000 (24M), M: 4240 x 2832 (12M), S: 3008 x 2000 (6.0M)',
        },
        {
            id: 6,
            deal: 'Best Seller',
            name: 'FE C 16-35mm T3.1 G',
            photo: 'images/Categories/BestSeller/FE C 16-35mm T3.1 G_01.jpg',
            image2: 'images/Categories/BestSeller/FE C 16-35mm T3.1 G_02.jpg',
            price: '$4,795',
            brand: 'Sony',
            detail: 'product-deotails-2.html',
            category: 'Lenses',
            formfactor: 'Wide Angle',
            weight: '1390 g',
            construction: '16 elements in 13 groups',
            productDimensions: '11.58 x 7.52 x 7.48 inches',
            maximumFocalLength: 'Maximum Focal Length: 35 millimeters',
            DustAndWater: '-',
        },
        {
            id: 7,
            deal: 'Best Sellers',
            name: 'MF-2 Camera Super DX',
            photo: 'images/Categories/BestSeller/MF-2 Camera Super DX_01.jpg',
            image2: 'images/Categories/BestSeller/MF-2 Camera Super DX_02.jpg',
            price: '$115',
            brand: 'Yashica',
            detail: 'product-deotails-1.html',
            category: 'Camera',
            formfactor: 'Analog',
            weight: '250g (without battery)',
            AFmode: 'Fixed focus (from 1.5m - infinity).',
            FlashModes: 'Sliding type flash unit with flash ready lamp; Approx. 5 seconds recycle time Approx. 200 flashes, 2 - 4m flash range (with ISO 100 film)',
            StillImageFormat: 'JPEG',
            StandardPowerSupply: 'Battery : AA Size x 2 (not included)',
            MemoryCardType: 'No memory card slot, use 35mm film',
            ImageResolution: 'ISO 100-400 film',
        },
        {
            id: 8,
            deal: 'Best Seller',
            name: 'Yashica Lens ML 200 mm 200mm',
            photo: 'images/Categories/BestSeller/Yashica Lens ML_01.jpg',
            image2: 'images/Categories/BestSeller/Yashica Lens ML_02.jpg',
            price: '$229.99',
            brand: 'Yashica',
            detail: 'product-deotails-2.html',
            category: 'Lenses',
            formfactor: 'Wide Angle',
            weight: '615g ',
            construction: '5 elements in 4 groups',
            productDimensions: '⌀62x150mm',
            maximumFocalLength: 'Maximum Focal Length: 200mm',
            DustAndWater: '-',
        },
        {
            id: 9,
            deal: 'New Arrival',
            name: 'IXUS 265 HS',
            photo: 'images/Categories/NewArrivals/ixus-265hs-2.jpg',
            image2: 'images/Categories/NewArrivals/ixus-265hs-4.jpg',
            price: '$230',
            brand: 'Canon',
            detail: 'product-deotails-1.html',
            category: 'Camera',
            formfactor: 'Mirrorless',
            weight: '147g',
            AFmode: 'Fixed focus (from 1.5m - infinity).',
            FlashModes: 'Auto, On, Slow Synchro, Off',
            StillImageFormat: 'JPEG',
            StandardPowerSupply: 'Battery pack NB-11LH',
            MemoryCardType: 'Memory Stick PRO-HG Duo, Memory Stick Micro (M2), SD, SDHC(UHS-I memory card (UHS-I compliant), microSD, microSDHC, microSDXC memory card',
            ImageResolution: '4:3 4608 x 3456(L) 3264 x 2448(M1) 2048 x 1536(M2) 640 x 480(S)00-400 filmISO',
        },
        {
            id: 10,
            deal: 'New Arrival',
            name: 'EF-M55-200mm f4.5-6.3 IS STM',
            photo: 'images/Categories/NewArrivals/EF-M55-200mm f4.5-6.3 IS STM1.jpg',
            image2: 'images/Categories/NewArrivals/EF-M55-200mm f4.5-6.3 IS STM2.jpg',
            price: '$260',
            brand: 'Canon',
            detail: 'product-deotails-2.html',
            category: 'Lenses',
            formfactor: 'Telephoto',
            weight: '9.2 ounces',
            construction: '17 elements in 11 groups',
            productDimensions: '9.45 x 27.17 x 0.98 inches',
            maximumFocalLength: 'Maximum Focal Length: 200mm',
            DustAndWater: '-',
        },
        {
            id: 11,
            deal: 'New Arrival',
            name: 'Z fc',
            photo: 'images/Categories/NewArrivals/Z fc01.jpg',
            image2: 'images/Categories/NewArrivals/Z fc02.jpg',
            price: '$721',
            brand: 'Nikon',
            detail: 'product-deotails-1.html',
            category: 'Camera',
            formfactor: 'Mirrorless',
            weight: '390 g',
            AFmode: 'Fixed focus (from 1.5m - infinity).',
            FlashModes: 'Dynamic-area AF,Wide-area AF',
            StillImageFormat: 'NEF (RAW), JPEG, NEF (RAW) + JPEG',
            StandardPowerSupply: 'One EN-EL25 rechargeable Li-ion battery',
            MemoryCardType: 'SD (Secure Digital) and UHS-I compliant SDHC and SDXC memory cards',
            ImageResolution: '(L)5,568 x 3,712 (M)4,176 x 2,784 (S)2,784 x 1,856',
        },
        {
            id: 12,
            deal: 'New Arrival',
            name: 'AF-S DX NIKKOR 18-300mm f3.5-6.3G',
            photo: 'images/Categories/NewArrivals/AF-S DX NIKKOR 18-300mm f3.5-6.3G ED VR_01.jpg',
            image2: 'images/Categories/NewArrivals/AF-S DX NIKKOR 18-300mm f3.5-6.3G ED VR_02.jpg',
            price: '$475',
            brand: 'Nikon',
            detail: 'product-deotails-2.html',
            category: 'Lenses',
            formfactor: 'Telephoto',
            weight: '1.21 pounds',
            construction: '16 elements in 12 groups',
            productDimensions: '3.9 x 3.11 x 3.11 inches',
            maximumFocalLength: 'Maximum Focal Length: 300 millimeters',
            DustAndWater: '-',
        },
        {
            id: 13,
            deal: 'New Arrival',
            name: 'ZV-E10',
            photo: 'images/Categories/NewArrivals/ZV-E10_01.jpg',
            image2: 'images/Categories/NewArrivals/ZV-E10_02.jpg',
            price: '$750',
            brand: 'Sony',
            detail: 'product-deotails-1.html',
            category: 'Camera',
            formfactor: 'Mirrorless',
            weight: '343 g',
            AFmode: 'AF-A',
            FlashModes: 'Flash off, Autoflash, Fill-flash, Slow Sync., Rear Sync., Wireless control2, Hi-speed sync2',
            StillImageFormat: 'RAW, RAW & JPEG, JPEG (Extra fine / Fine / Standard)',
            StandardPowerSupply: 'One rechargeable battery pack NP-FW50',
            MemoryCardType: 'microSDXC, microSDHC, microSD, SDXC',
            ImageResolution: 'L: 5328 x 4000 (21 M), M: 3776 x 2832 (11 M), S: 2656 x 2000 (5.3 M)',
        },
        {
            id: 14,
            deal: 'New Arrival',
            name: 'FE 16-35mm F2.8 GM II',
            photo: 'images/Categories/NewArrivals/FE 16-35mm F2.8 GM II_01.jpg',
            image2: 'images/Categories/NewArrivals/FE 16-35mm F2.8 GM II_02.jpg',
            price: '$2,298',
            brand: 'Sony',
            detail: 'product-deotails-2.html',
            category: 'Lenses',
            formfactor: 'Wide Angle',
            weight: '1.2 pounds',
            construction: '12 elements in 15 groups',
            productDimensions: '4.5 x 3.5 x 3.5 inches',
            maximumFocalLength: 'Maximum Focal Length: 300 millimeters',
            DustAndWater: '-',
        },

        {
            id: 15,
            deal: 'New Arrival',
            name: 'YASHICA MF-1 Snapshot Art 35mm Film Camera Set',
            photo: 'images/Categories/NewArrivals/YASHICA MF-1 Snapshot Art 35mm Film Camera Set_01.jpg',
            image2: 'images/Categories/NewArrivals/YASHICA MF-1 Snapshot Art 35mm Film Camera Set_02.jpg',
            price: '$45',
            brand: 'Yashica',
            detail: 'product-deotails-1.html',
            category: 'Camera',
            formfactor: 'Film',
            weight: '8.1 ounces',
            AFmode: 'NO',
            FlashModes: 'Use the internal flash to get perfect snapshots even in low light',
            StillImageFormat: 'simple 35mm film',
            StandardPowerSupply: 'battery',
            MemoryCardType: 'Film Format Type: 35mm',
            ImageResolution: 'YASHICA 400 35mm negative film',
        },
        {
            id: 16,
            deal: 'New Arrival',
            name: 'Yashica Auto Yashinon 5cm 50mm f2 M42',
            photo: 'images/Categories/NewArrivals/Yashica Auto Yashinon 5cm 50mm f2 M42_01.jpg',
            image2: 'images/Categories/NewArrivals/Yashica Auto Yashinon 5cm 50mm f2 M42_01.jpg',
            price: '$150',
            brand: 'Yashica',
            detail: 'product-deotails-2.html',
            category: 'Lenses',
            formfactor: 'Wide Angle',
            weight: '210g',
            construction: '6 elements in 4 groups',
            productDimensions: '4.5 x 3.5 x 3.5 inches',
            maximumFocalLength: 'Maximum Focal Length: 	50 Millimeters',
            DustAndWater: '-',
        }
    ];




    var $productCompare = $('#product-compare'),
        modalProductCompare = null;

    if ($productCompare.length) {
        modalProductCompare = new bootstrap.Modal($productCompare.get(0), {
            static: false
        });
    }

    var compare_list = [];
    $('.btn-compare').click(function (e) {
        e.preventDefault();

        var id = $(this).attr('data');
        if (id && products_compare[id]) {
            if (-1 === compare_list.indexOf(id)) {
                if (compare_list.length < 3) {
                    compare_list.push(id);

                    var productData = products_compare[id],
                        htmlContent = '';

                    htmlContent += '<div class="item" data="' + id + '">';
                    htmlContent += '<div class="photo"><img src="' + productData.photo + '" alt="' + productData.name + '"></div>';
                    htmlContent += '<div class="name">' + productData.name + '</div>';
                    htmlContent += '<button type="button" class="btn-close"></button>';
                    htmlContent += '</div>';

                    $('#compare-box .list').append(htmlContent);

                    $('#compare-box .run').prop('disabled', !(compare_list.length > 1));

                    $('#compare-box').addClass('active');
                }
                else {
                    alert('You can only choose up to 3 products to compare');
                }
            }
            else {
                alert('This product already exists in the comparison list');
            }
        }
        else {
            console.warn('Oops, something went wrong');
        }
    });

    $("#compare-box").on('click', '.btn-close', function (e) {
        e.preventDefault();

        var $item = $(this).parent('.item'),
            id = $item.attr('data'),
            idx = id ? compare_list.indexOf(id) : null;

        if (id && idx !== -1) {
            compare_list.splice(idx, 1);

            $item.remove();

            $('#compare-box .run').prop('disabled', !(compare_list.length > 1));

            if (!compare_list.length) {
                $('#compare-box').removeClass('active');
            }
        }
    });

    $("#compare-box .run").click(function (e) {
        e.preventDefault();

        var specs = [
            {
                key: 'photo',
                name: 'Product Image',
            },
            {
                key: 'name',
                name: 'Name',
            },
            {
                key: 'brand',
                name: 'Brand',
            },
            {
                key: 'deal',
                name: 'Deals',
            },
            {
                key: 'formfactor',
                name: 'Form factor',
            },
            {
                key: 'price',
                name: 'Price',
            },
            {
                key: 'weight',
                name: 'Weight',
            },
            {
                key: 'AFmode',
                name: 'AF mode',
            },
            {
                key: 'FlashModes',
                name: 'Flash modes',
            },


            {
                key: 'StillImageFormat',
                name: 'Still Image Format',
            },
            {
                key: 'StandardPowerSupply',
                name: 'Standard Power Supply',
            },
            {
                key: 'MemoryCardType',
                name: 'Memory Card Type',
            },
            {
                key: 'ImageResolution',
                name: 'Image Resolution',
            },
        ];

        var htmlContent = '';

        htmlContent += '<table class="table table-bordered">';
        specs.forEach(function (d) {
            var htmlItem = '';
            htmlItem += '<tr>';
            htmlItem += '<th>' + d.name + '</th>';
            compare_list.forEach(function (i) {
                var product = products_compare[i];
                if (product[d.key]) {
                    htmlItem += '<td>';
                    htmlItem += '<div class="compare--' + d.key + '">';
                    if ('photo' == d.key) {
                        htmlItem += '<img src="' + product[d.key] + '">';
                    }
                    else if ('size' == d.key) {
                        Object.keys(product[d.key]).forEach(function (s) {
                            if (product[d.key][s]) {
                                htmlItem += '<span>' + String(s).toUpperCase() + '</span>';
                            }
                        });
                    }
                    else {
                        htmlItem += product[d.key];
                    }
                    htmlItem += '</div>';
                    htmlItem += '</td>';
                }
                else {
                    console.warn(d.key, product, 'not found');

                    return;
                }
            });
            htmlItem += '</tr>';

            htmlContent += htmlItem;
        });
        htmlContent += '</table>';

        $('#product-compare-detail').html(htmlContent);

        if (modalProductCompare) {
            modalProductCompare.show();
        }
    });


    // Filter Category
$('.filter__input').on("click", function() {
	$(this).parents('li').siblings().find('input').prop('checked', false);

	let attr = '';
	$('.filter__ul').each(function(){
		var total_checked = $(this).find('li input:checked').length;
		if(total_checked > 0){
			attr += '[data-' + $(this).attr('data') + '="' + $(this).find('li input:checked').val() + '"]';
		}
	});

	$('.product--item').hide();
	$('.product--item' + attr).show();

	var result_total = $('.product--item:visible').length,
		length = $('.filter__input:checked').length;

	if(length <= 0){
	  $('.select-shoing-wrap p').html('Showing 1–9 of 9 result');    
	}else{
	  $('.select-shoing-wrap p').html('Showing ' + result_total + ' result');    
	}
});


// add cart
$('.add-cart').on('click', function(){
    var cart_list = $('.shopping-cart-content ul'),
        name = '',
        price = '',
        img = '',
        quantity = '01';
  
    if($(this).hasClass('pro-cart')){
      var content_div = $(this).parents('.product-wrap').find('.product-content');
      name = content_div.find('h3 a').html();
      price = content_div.find('.product-price span').html();
      img = content_div.siblings().find('.default-img').attr('src');
    }
    var count_num = parseInt($('.count-style').html()),
          total = count_num + 1;
    var count_div = $('.count-style');
    count_div.html((total < 10) ? '0' + total : total);
    if (checkQty(img, name, 1)==0)
    {
      addToCart(cart_list, name, price, quantity, img);
      return;
    }
    countTotalPrice(cart_list);
  })
  
  function checkQty(img, name, isAdd) {
    const qtyid = document.getElementById("qty-"+name);
    const priceid = document.getElementById("price-"+name);
    if (qtyid==null) return 0;
    const content_div = JSON.parse(sessionStorage.getItem("sesCars"));
    for (let i = 0; i<content_div.length; i++)
    {
        if (content_div[i].id == img)
        {
          const lock = sessionStorage.getItem("lock");
          let qty = content_div[i].qty;
          if (isAdd && lock != 0) qty++;
          const price = content_div[i].price;
          qtyid.innerHTML = 'Qty: ' + qty;
          priceid.innerHTML = '$' + price;
          return 1;
        }
    }
    return 0;
  }
  
  function addToCart(append_list, name, price, quantity, img){
    append_list.append(
      '<li class="single-shopping-cart">' +
        '<div class="shopping-cart-img">' +
          '<a href="#"><img alt="" class="cart-item-image" src="'+ img +'" width="75px"></a>' +
        '</div>' +
        '<div class="shopping-cart-title">' +
          '<h4><a href="#">'+ name +'</a></h4>' +
          '<h6 id="qty-'+ name +'"  >Qty: '+ quantity +'</h6>' +
          '<span id="price-'+ name +'">'+ price +'</span>' +
        '</div>' +
        '<div class="shopping-cart-delete">' +
          '<a href="javascript:void(0)" onclick="removeFromCart($(this))"><i class="fa fa-times-circle"></i></a>' +
        '</div>' +
      '</li>'
    );
    countTotalPrice(append_list);
  }
  
  function removeFromCart(element){
    element.parents('li').remove();
    countTotalPrice($('.shopping-cart-content ul'));
    var count_div = $('.count-style'),
        count_num = parseInt(count_div.html()),
        total = count_num - 1;
    count_div.html((total != 0 && total < 10) ? '0' + total : total);
  }
  
  function countTotalPrice(append_list){
    console.log('hello');
    var total = 0;
    append_list.find('li').each(function() {
      total += parseInt($(this).find('.shopping-cart-title span').html().replace('$', ''))
      console.log(total);
    });
    $('.shop-total').html('$' + total + '.00');
  }
  
  // search product list
  $("#searchTableBtn").on("click", function() {
    var value = $(this).prev('input').val().toLowerCase(),
        result_total = 0;
      
    $('.row .col-xl-4').filter(function() {
      $(this).toggle($(this).find('.product-content h3 a').text().toLowerCase().indexOf(value) > -1);
    });
    result_total = $('.row .col-xl-4:visible').length;
  
    if(value == ''){
      $('.select-shoing-wrap p').html('Showing 1–9 of 9 result');    
    }else{
      $('.select-shoing-wrap p').html('Showing ' + result_total + ' result');    
    }
  });


    /* Cart search */
    $(".account-satting-active , .search-active").on("click", function(e) {
        e.preventDefault();
        $(this).parent().find('.account-dropdown , .search-content').slideToggle('medium');
    })
     

    /* Cart dropdown */
    var iconCart = $('.icon-cart');
    iconCart.on('click', function () {
        $('.shopping-cart-content').toggleClass('cart-visible');
    })

    /* Slider active */
    $('.slider-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })






   




    /*----------------------------
        Cart Plus Minus Button
    ------------------------------ */
    var CartPlusMinus = $('.cart-plus-minus');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });


    /*--
    Menu Stick
    -----------------------------------*/
    var header = $('.sticky-bar');
    var win = $(window);
    win.on('scroll', function () {
        var scroll = win.scrollTop();
        if (scroll < 200) {
            header.removeClass('stick');
        } else {
            header.addClass('stick');
        }
    });

















    /*=========================
        Toggle Ativation
    ===========================*/



    /*--------------------------
        ScrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });






















    /*--
    Magnific Popup
    ------------------------*/
    $('.img-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });











    /*------ Wow Active ----*/
    new WOW().init();














})(jQuery);