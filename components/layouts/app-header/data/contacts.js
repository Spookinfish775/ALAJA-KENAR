const contacts = function (context) {
  return [{
      icon: "mdi-phone-in-talk",
      title: context.$t("header.contacts.phoneTitle"),
      subtitle: context.$t("header.contacts.phoneSubTitle"),
      type: "tel:",
      value: "+99366666666"
    },
    {
      icon: "mdi-email",
      title: context.$t("header.contacts.mailTitle"),
      subtitle: context.$t("header.contacts.mailSubTitle"),
      type: "mailto:",
      value: "info@tes.com"
    },
    {
      icon: "mdi-map-marker",
      title: context.$t("header.contacts.addressTitle"),
      subtitle: context.$t("header.contacts.addressSubTitle"),
      type: "",
      value: ""
    }
  ];
}

export default contacts
