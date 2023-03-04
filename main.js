const partList = [
  {
    text: "ILedgers, Bitcoin, Blockchains",
    title: "Part I: Ledgers, Bitcoin, Blockchains",
    url: "/#ledgers-bitcoin-blockchains",
  },
  {
    text: "IIWhat Does It Mean?",
    title: "Part II: What Does It Mean?",
    url: "/#what-does-it-mean",
  },
  {
    text: "IIIThe Crypto Financial System",
    title: "Part III: The Crypto Financial System",
    url: "/#the-crypto-financial-system",
  },
  {
    text: "IVTrust, Money, Community",
    title: "Part IV: Trust, Money, Community",
    url: "/#trust-money-community",
  },
];

$(document).ready(function () {
  $(".nav-bar-menu-button").click(function () {
    $(".fixed-overlay-wrapper").toggleClass("active");
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      if ($(".fixed-overlay-wrapper").hasClass("active")) {
        $(this).text("x");
      } else {
        $(this).text("↓");
      }
    } else {
      if ($(".fixed-overlay-wrapper").hasClass("active")) {
        $(this).text("Close");
      } else {
        $(this).text("Menu");
      }
    }
  });

  const navbarHeaderHeight = $(".wrapper").height();
  const headerHeight = $("header").height();
  let lastScrollTop = 0;
  $(window).scroll(function (event) {
    let st = $(this).scrollTop();

    if (lastScrollTop < navbarHeaderHeight + headerHeight) {
      $(".nav-wrapper").removeClass("pinned");
      $(".fixed-overlay-wrapper").removeClass("active");
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        $(".nav-bar-menu-button").text("↓");
      } else {
        $(".nav-bar-menu-button").text("Menu");
      }
    } else {
      $(".nav-wrapper").addClass("pinned");
    }

    let sectionList = [];
    const mainPageHeight = $(".inner").height();
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $(".inner > a")
      .not(":last")
      .each(function (i) {
        const offsetTop = $(this).offset().top;
        const text = $(this).text();
        sectionList.push({ index: i, offsetTop });
        if (lastScrollTop > offsetTop - 100) {
          const selected = partList.filter((item) => item.text === text);
          $(".nav-bar-title").text(selected[0].title);
        }
      });

    const listHeightEachSection = sectionList.map((item, index) => {
      if (index < 3) {
        return {
          sectionHeight:
            sectionList[index + 1].offsetTop - sectionList[index].offsetTop,
          offsetTop: item.offsetTop,
        };
      } else {
        return {
          sectionHeight: mainPageHeight - item.offsetTop,
          offsetTop: item.offsetTop,
        };
      }
    });

    listHeightEachSection.map((item) => {
      if (
        scroll >= item.offsetTop &&
        scroll < item.offsetTop + item.sectionHeight
      ) {
        const visiblePercent = Math.round(
          ((scroll - item.offsetTop) / (item.sectionHeight - windowHeight)) *
            100
        );
        $(".nav-bar-title").attr("style", `--percent: ${visiblePercent};`);
      }
    });

    lastScrollTop = st;
  });

  let number = 0;
  $(".nav-bar-right-button").click(function () {
    number++;
    document.location.href = partList[number].url;
    $(".nav-bar-title").text(partList[number].title);
    if (number === 3) {
      $(".nav-bar-left-button").prop("disabled", false);
      $(".nav-bar-right-button").prop("disabled", true);
    }
    if (number >= 1 && number < 3) {
      $(".nav-bar-right-button").prop("disabled", false);
      $(".nav-bar-left-button").prop("disabled", false);
    }
  });

  $(".nav-bar-left-button").click(function () {
    number--;
    document.location.href = partList[number].url;
    $(".nav-bar-title").text(partList[number].title);
    if (number === 0) {
      $(".nav-bar-left-button").prop("disabled", true);
      $(".nav-bar-right-button").prop("disabled", false);
    }
    if (number >= 1 && number < 3) {
      $(".nav-bar-right-button").prop("disabled", false);
      $(".nav-bar-left-button").prop("disabled", false);
    }
  });
});
