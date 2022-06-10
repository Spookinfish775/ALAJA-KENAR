const links = function (context) {
  return [{
    name: context.$t("header.links.home"),
    path: "/"
  },
  {
    name: context.$t("header.links.aboutUs"),
    path: "/about-us"
  },
  {
    name: context.$t("header.links.services"),
    path: "/services"
  },
  {
    name: context.$t("header.links.contactUs"),
    path: "/contact-us"
  }
  ]
}

export default links
