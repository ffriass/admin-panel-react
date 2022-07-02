import { UserHasAccessToPage } from "../../../modules/crm/helpers/role-mangement";
import { PAGES } from "../../../modules/crm/helpers/role-management/role-mapping";

function getMenuItems(state, unsubscribe) {
  if (unsubscribe && state.auth.isAuthenticated) {
    unsubscribe();
  }

  return [
    {
      subItems: [
        {
          title: "Customers",
          link: "/search",
          materialIconTag: "search",
          tag: "crm-customers",
          visible: UserHasAccessToPage(PAGES.CUSTOMERS),
        },
        {
          title: "Order Follow-ups",
          link: "/order-followups",
          materialIconTag: "all_inbox",
          tag: "crm-order-followups",
          visible: UserHasAccessToPage(PAGES.ORDER_FOLLOWUPS),
        },
        {
          title: "Domains",
          link: "/domains/renewals-report",
          basePath: "/domains",
          materialIconTag: "language",
          tag: "crm-domains",
          visible: UserHasAccessToPage(PAGES.DOMAINS),
        },
        {
          title: "Compliance",
          link: "/compliance/fraud-prevention",
          basePath: "/compliance",
          materialIconTag: "not_interested",
          tag: "crm-compliance",
          visible: UserHasAccessToPage(PAGES.COMPLIANCE),
        },
        {
          title: "Role Management",
          link: "/role-management",
          materialIconTag: "group",
          tag: "crm-role-management",
          visible: UserHasAccessToPage(PAGES.ROLE_MANAGEMENT),
        },
        {
          title: "New Account",
          link: "/external-add-account",
          materialIconTag: "person_add",
          tag: "crm-add-external-account",
          visible: UserHasAccessToPage(PAGES.NEW_ACCOUNT),
        },
        {
          title: "Comments",
          link: "/comments",
          materialIconTag: "forum",
          tag: "crm-comments",
          visible: UserHasAccessToPage(PAGES.COMMENTS),
        },
        {
          title: "In Product Messaging",
          link: "/in-product-messaging/list",
          materialIconTag: "new_releases",
          tag: "crm-in-product-messaging",
          visible: UserHasAccessToPage(PAGES.IN_PRODUCT_MESSAGING),
        },
        {
          title: "Release Notes",
          link: "/release-notes",
          materialIconTag: "new_releases",
          tag: "crm-release-notes",
          visible: UserHasAccessToPage(PAGES.RELEASE_NOTES),
        },
        {
          title: "Development",
          materialIconTag: "link",
          tag: "cst-dev-tools",
          visible: UserHasAccessToPage(PAGES.DEVELOPMENT),
          subItems: [
            {
              title: "Testing tools",
              link: "/testing-tools/create-account",
              basePath: "/testing-tools",
              materialIconTag: "link",
              tag: "cst-testing-tools-create-account",
              visible: UserHasAccessToPage(PAGES.TESTING_TOOLS),
            },
          ],
        },
        {
          title: "Reports",
          materialIconTag: "insert_chart",
          tag: "mp-reports",
          visible: UserHasAccessToPage(PAGES.REPORTS),
          subItems: [
            {
              title: "Builder",
              link: "/financial-reports/builder/overview",
              basePath: "/financial-reports/builder",
              materialIconTag: "show_chart",
              tag: "crm-sp-reports-builder",
              visible: UserHasAccessToPage(PAGES.REPORTS_BUILDER),
            },
            {
              title: "Gator",
              link: "/financial-reports/gator/overview",
              basePath: "/financial-reports/gator",
              materialIconTag: "bar_chart",
              tag: "crm-sp-reports-gator",
              visible: UserHasAccessToPage(PAGES.REPORTS_GATOR),
            },
            {
              title: "Constant Contact",
              link: "/financial-reports/ctct/overview",
              basePath: "/financial-reports/ctct",
              materialIconTag: "timeline",
              tag: "cst-mp-reports-ctct",
              visible: UserHasAccessToPage(PAGES.REPORTS_CTCT),
            },
            {
              title: "Email Marketing",
              link: "/financial-reports/email-marketing/overview",
              basePath: "/financial-reports/email-marketing",
              materialIconTag: "mail",
              tag: "cst-mp-reports-email-marketing",
              visible: UserHasAccessToPage(PAGES.REPORTS_EMAIL_MARKETING),
            },
            {
              title: "WordPress CM",
              link: "/financial-reports/wordpress-cm/overview",
              basePath: "/financial-reports/wordpress-cm",
              materialIconTag: "language",
              tag: "cst-mp-reports-wordpress-cm",
              visible: UserHasAccessToPage(PAGES.REPORTS_WORDPRESS_CM),
            },
            {
              title: "WordPress Editor",
              link: "/financial-reports/wordpress-editor/overview",
              basePath: "/financial-reports/wordpress-editor",
              materialIconTag: "language",
              tag: "cst-mp-reports-wordpress-editor",
              visible: UserHasAccessToPage(PAGES.REPORTS_WORDPRESS_EDITOR),
            },
            {
              title: "Social",
              link: "/financial-reports/social/overview",
              basePath: "/financial-reports/social",
              materialIconTag: "chat",
              tag: "crm-mp-reports-social",
              visible: UserHasAccessToPage(PAGES.REPORTS_SOCIAL),
            },
            {
              title: "Store",
              link: "/financial-reports/store/overview",
              basePath: "/financial-reports/store",
              materialIconTag: "pie_chart",
              tag: "crm-mp-reports-store",
              visible: UserHasAccessToPage(PAGES.REPORTS_STORE),
            },
            {
              title: "Site",
              link: "/financial-reports/site/overview",
              basePath: "/financial-reports/site",
              materialIconTag: "star",
              tag: "crm-mp-reports-store-nps",
              visible: UserHasAccessToPage(PAGES.REPORTS_SITE),
            },
            {
              title: "Advanced",
              link: "/financial-reports/advanced/express",
              basePath: "/financial-reports/advanced",
              materialIconTag: "multiline_chart",
              tag: "crm-mp-reports-advanced",
              visible: UserHasAccessToPage(PAGES.REPORTS_ADVANCED),
            },
            {
              title: "Sift Report Tool",
              link: "/sift-report-tool",
              materialIconTag: "security",
              tag: "crm-mp-sift-report-tool",
              visible: UserHasAccessToPage(PAGES.SIFT_REPORT_TOOL),
            },
            {
              title: "Support Team Reports",
              link: "/support-team-reports/paas-recycle-queue",
              basePath: "/support-team-reports",
              materialIconTag: "cloud_queue",
              tag: "cst-mp-support-team-reports",
              visible: UserHasAccessToPage(PAGES.PAAS_RECYCLE_QUEUE),
            },
          ],
        },
        {
          title: "Configuration",
          materialIconTag: "settings",
          tag: "mp-configuration",
          visible: UserHasAccessToPage(PAGES.CONFIGURATION),
          subItems: [
            {
              title: "Suspicious Management",
              link: "/configuration/suspicious-management",
              materialIconTag: "find_in_page",
              tag: "mp-configuration-suspicious-keywords",
              visible: UserHasAccessToPage(PAGES.SUSPICIOUS_MANAGEMENT),
            },
            {
              title: "Site Categories",
              link: "/configuration/topic",
              basePath: "/configuration/topic",
              materialIconTag: "list_alt",
              tag: "mp-configuration-topics",
              visible: UserHasAccessToPage(PAGES.TOPICS),
            },
            {
              title: "Translations",
              materialIconTag: "language",
              link: "/translations",
              tag: "translation-tool",
              visible: UserHasAccessToPage(PAGES.TRANSLATIONS),
            },
            {
              title: "Translations Configuration",
              materialIconTag: "language",
              link: "/translations/configuration",
              tag: "translation-configuration",
              visible: UserHasAccessToPage(PAGES.TRANSLATIONS_CONFIGURATION),
            },
            {
              title: "Feature Flag",
              materialIconTag: "outlined_flag",
              link: "/feature-flag/feature",
              tag: "cst-feature-flag-overview",
              visible: UserHasAccessToPage(PAGES.FEATURE_FLAG),
            },
            {
              title: "Miscellaneous",
              materialIconTag: "more",
              link: "/configuration/miscellaneous/chunks",
              tag: "cst-mp-configuration-chunks",
              visible: UserHasAccessToPage(PAGES.CHUNKS),
            },
          ],
        },
      ],
    },
  ];
}

function getAccountMenuItems() {
  return {
    menuItems: [
      {
        title: "Logout",
        link: "/logout",
        tag: "cst-logout",
        materialIconTag: "power_settings_new",
      },
    ],
  };
}

export { getMenuItems, getAccountMenuItems };
