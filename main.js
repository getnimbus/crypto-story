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
  const prevBtn = $(".nav-bar-left-button");
  const nextBtn = $(".nav-bar-right-button");
  let lastScrollTop = 0;

  $(window).scroll(handleScrollEvent);
  function handleScrollEvent() {
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
    const windowScroll = $(window).scrollTop();

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

    const percentSectionList = listHeightEachSection.map((item) => {
      if (
        windowScroll >= item.offsetTop &&
        windowScroll < item.offsetTop + item.sectionHeight
      ) {
        const visiblePercent = Math.round(
          ((windowScroll - item.offsetTop) /
            (item.sectionHeight - windowHeight)) *
            100
        );
        $(".nav-bar-title").attr(
          "style",
          `--percent: ${visiblePercent > 100 ? 0 : visiblePercent};`
        );
        return visiblePercent > 100 ? 0 : visiblePercent;
      }
    });

    if (percentSectionList[0] === undefined || percentSectionList[0]) {
      prevBtn.prop("disabled", true);
      nextBtn.prop("disabled", false);
    }
    if (percentSectionList[1] || percentSectionList[0] === 0) {
      nextBtn.prop("disabled", false);
      prevBtn.prop("disabled", false);
    }
    if (percentSectionList[2] || percentSectionList[1] === 0) {
      nextBtn.prop("disabled", false);
      prevBtn.prop("disabled", false);
    }
    if (
      percentSectionList[3] ||
      percentSectionList[2] === 0 ||
      percentSectionList[3] === 0
    ) {
      nextBtn.prop("disabled", true);
      prevBtn.prop("disabled", false);
    }

    lastScrollTop = st;
  }

  nextBtn.click(function () {
    const title = $(".nav-bar-title").text();
    const selectedSection = partList.filter((item) => item.title === title);
    const index = partList.indexOf(selectedSection[0]);

    if (index < 3) {
      nextBtn.prop("disabled", false);
      prevBtn.prop("disabled", false);
      document.location.href = partList[index + 1].url;
      $(".nav-bar-title").text(partList[index + 1].title);
    } else {
      prevBtn.prop("disabled", false);
      nextBtn.prop("disabled", true);
    }
  });

  prevBtn.click(function () {
    const title = $(".nav-bar-title").text();
    const selectedSection = partList.filter((item) => item.title === title);
    const index = partList.indexOf(selectedSection[0]);

    if (index > 0) {
      nextBtn.prop("disabled", false);
      prevBtn.prop("disabled", false);
      document.location.href = partList[index - 1].url;
      $(".nav-bar-title").text(partList[index - 1].title);
    } else {
      prevBtn.prop("disabled", true);
      nextBtn.prop("disabled", false);
    }
  });
});
