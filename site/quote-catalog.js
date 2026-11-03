/* quote-catalog.js - everything the quote-v2 page offers, in one place.
 *
 * HOW TO EDIT (no coding needed beyond copying the pattern):
 *  - Move a product to another category: move its name between the lists in "groups".
 *  - Add a product: add its name to a group, add an entry in "products" (copy a similar one), and add search words in "keywords".
 *  - Add or remove a choice: edit the "opts" list of a question. An option is [value, hint, badge, tag]:
 *      value = the text customers see and we receive; hint = one-line help; badge = small label such as "Popular";
 *      tag "indoor" = warn if the customer picked "Outdoors" in "Where will it be used?".
 *  - Question types: one (pick one), multi (pick several), size (pick or type), paper (pick several plus typed weight),
 *      line (one-line answer), text (longer answer), pages (number of pages).
 *  - "more": true puts the question under "More options (optional)".
 *  - Large format (banners, rigid signs, graphics, displays) follows b2sign.com's categories and product names.
 *  - Print-product options (sizes, paper, finishes) were copied from the original quote.html (PRODUCT_CONFIGS).
 *  - Prices never appear here.
 */
window.QV2_DATA = {
 "usePhotos": {"tiles": true, "options": false},
 "photos": {
  "13oz-vinyl-banner": "images/home/vinyl-banners.jpg",
  "coroplast-4mm": "images/home/yard-signs.jpg",
  "foam-board-3-16": "images/home/foam-board-signs.jpg",
  "retractable-banner-stand": "images/home/retractable-banners.jpg"
 },
 "notSure": "Not sure — recommend for me",
 "filesUrl": "https://personal.filesanywhere.com/guest/fr?v=8b69638d6163a37ba69a",
 "defaultQty": [
  "25",
  "50",
  "100",
  "250",
  "500",
  "1,000",
  "2,500"
 ],
 "popular": [
  "Banners",
  "Rigid Signs & Magnets",
  "Stickers & Labels",
  "Booklets",
  "Flyers",
  "Business Cards",
  "Posters",
  "Yard Signs",
  "Hang Tags"
 ],
 "groups": [
  [
   "Marketing Prints",
   [
    "Flyers",
    "Brochures",
    "Postcards",
    "Rack Cards",
    "Door Hangers",
    "Table Tents",
    "Calendars",
    "Menus",
    "Placemats"
   ]
  ],
  [
   "Cards & Stationery",
   [
    "Business Cards",
    "Hang Tags",
    "Certificates"
   ]
  ],
  [
   "Stickers & Labels",
   [
    "Stickers & Labels"
   ]
  ],
  [
   "Large Format (banners, signs, graphics)",
   [
    "Banners",
    "Rigid Signs & Magnets",
    "Yard Signs",
    "Posters",
    "Window, Wall & Floor Graphics",
    "Canvas & Wall Art",
    "Popup & Backlit Film"
   ]
  ],
  [
   "Displays & Events",
   [
    "Flags",
    "Banner Stands",
    "Tents",
    "Table Throws",
    "Step & Repeat Backdrops",
    "A-Frames & Sign Holders",
    "Real Estate Signs",
    "Trade Show Displays",
    "Hardware Only"
   ]
  ],
  [
   "Booklets & Folders",
   [
    "Booklets",
    "Presentation Folders"
   ]
  ],
  [
   "Office & Business",
   [
    "Letterhead",
    "Envelopes",
    "Remittance Envelopes",
    "Notepads",
    "Invoice Books"
   ]
  ]
 ],
 "keywords": {
  "Flyers": "flyer flyers leaflet handout handbill sheet one pager",
  "Brochures": "brochure trifold tri-fold folded half-fold pamphlet",
  "Postcards": "postcard post card mailer eddm direct mail greeting card invitation",
  "Rack Cards": "rack card",
  "Door Hangers": "door hanger",
  "Table Tents": "table tent",
  "Calendars": "calendar wall desk",
  "Menus": "menu restaurant",
  "Placemats": "placemat",
  "Business Cards": "business card cards name card",
  "Hang Tags": "hang tag gift tag product tag swing tag",
  "Certificates": "certificate award diploma",
  "Stickers & Labels": "sticker label decal die-cut kiss-cut holographic foil glitter static cling roll sheet barcode upc bottle",
  "Banners": "banner banners sign signage vinyl mesh fabric blockout backlit pole banner hand banner tension fabric indoor banner grommet hem trade show event",
  "Rigid Signs & Magnets": "rigid sign signs signage board coroplast corrugated plastic foam board foamcore foam core sintra pvc board styrene metal sign steel sign magnet car magnet vehicle magnet reflective dry erase whiteboard poster board",
  "Yard Signs": "yard sign signs lawn sign coroplast stake h-stake election campaign political",
  "Posters": "poster print paper poster",
  "Window, Wall & Floor Graphics": "window graphic window cling window perf perforated adhesive vinyl decal wall decal wall mural wall fabric floor graphic floor decal clear vinyl translucent sign signage",
  "Canvas & Wall Art": "canvas wall art acrylic print fine art photo print art print",
  "Flags": "flag flags feather flag teardrop flag pole flag advertising flag swooper beach flag",
  "Banner Stands": "banner stand stand standee retractable roll up rollup pull up pullup x frame easel display",
  "Tents": "tent tents canopy popup pop up pop-up event tent custom tent 10x10 10x15 10x20 gazebo",
  "Table Throws": "table throw table cover tablecloth table runner trade show fabric polyester dye sublimation",
  "Step & Repeat Backdrops": "step and repeat step repeat backdrop photo wall photo booth press wall",
  "A-Frames & Sign Holders": "a-frame a frame aframe sandwich board sidewalk sign sign holder signicade stand sign stand",
  "Real Estate Signs": "real estate sign signs open house for sale realtor rider frame",
  "Trade Show Displays": "trade show tradeshow display booth pop up popup backdrop stand",
  "Booklets": "booklet booklets book books yearbook catalog catalogue program saddle stitch stapled spiral coil perfect bound magazine manual zine",
  "Presentation Folders": "folder presentation pocket",
  "Letterhead": "letterhead stationery",
  "Envelopes": "envelope",
  "Remittance Envelopes": "remittance envelope",
  "Notepads": "notepad pad notebook memo",
  "Invoice Books": "invoice book ncr form carbonless receipt",
  "Other": "other custom badge id stamp notary rubber stamp name tag lanyard not listed something else",
  "Reorder": "repeat reorder again same as before previous order",
  "Popup & Backlit Film": "popup pop up backlit film light box lightbox translite 14 mil poster",
  "Hardware Only": "hardware stand pole bracket frame base"
 },
 "special": {
  "Other": {
   "label": "Something else",
   "sub": "Not listed? Tell us what you need",
   "questions": [
    {
     "k": "describe",
     "label": "Tell us what you need",
     "type": "text"
    }
   ],
   "img": "images/quote/p-other"
  },
  "Reorder": {
   "label": "Repeat of a past order",
   "sub": "Same job as before",
   "questions": [
    {
     "k": "prev",
     "label": "Which order? (job name, date or invoice number)",
     "type": "text"
    },
    {
     "k": "changes",
     "label": "Any changes?",
     "type": "one",
     "opts": [
      [
       "Exactly the same",
       "",
       "",
       "",
       "images/quote/changes-exactly-the-same"
      ],
      [
       "Same, with small changes",
       "",
       "",
       "",
       "images/quote/changes-same-with-small-changes"
      ]
     ]
    }
   ],
   "img": "images/quote/p-reorder"
  }
 },
 "typedQuestions": [
  {
   "k": "size",
   "label": "Size (if you know it)",
   "type": "line",
   "ph": "e.g. 4 × 9 in"
  },
  {
   "k": "paper",
   "label": "Paper / material",
   "type": "paper",
   "opts": [
    [
     "Not sure — recommend for me"
    ]
   ],
   "feel": true,
   "short": "Paper"
  },
  {
   "k": "print",
   "label": "Color and sides",
   "type": "one",
   "opts": [
    [
     "Full Color, Double-Sided",
     "",
     "",
     "",
     "images/quote/print-full-color-double-sided"
    ],
    [
     "Full Color, Single-Sided",
     "",
     "",
     "",
     "images/quote/print-full-color-single-sided"
    ],
    [
     "Color Front / B&W Back",
     "",
     "",
     "",
     "images/quote/print-color-front-b-w-back"
    ],
    [
     "B&W, Double-Sided",
     "",
     "",
     "",
     "images/quote/print-b-w-double-sided"
    ],
    [
     "B&W, Single-Sided",
     "",
     "",
     "",
     "images/quote/print-b-w-single-sided"
    ]
   ],
   "short": "Print"
  },
  {
   "k": "describe",
   "label": "Anything else about it?",
   "type": "text"
  }
 ],
 "presets": [
  {
   "label": "An outdoor banner",
   "product": "Banners",
   "a": {
    "use": "Outdoors",
    "material": [
     "13oz Vinyl Banner"
    ]
   }
  },
  {
   "label": "Flyers to hand out",
   "product": "Flyers",
   "a": {
    "size": "8.5\" × 11\" (Letter)",
    "paper": [
     "100lb Gloss Text"
    ],
    "print": "Full Color, Double-Sided"
   }
  },
  {
   "label": "Business cards",
   "product": "Business Cards",
   "a": {
    "size": "3.5\" × 2\" (Standard)",
    "paper": [
     "16PT Silk"
    ],
    "print": "Full Color, Double-Sided"
   }
  }
 ],
 "products": {
  "Flyers": {
   "qty": [
    "25",
    "50",
    "100",
    "250",
    "500",
    "1,000",
    "2,500",
    "5,000",
    "10,000"
   ],
   "questions": [
    {
     "k": "size",
     "label": "Size",
     "type": "size",
     "opts": [
      [
       "3.5\" × 8.5\" (Rack Card)",
       "",
       "",
       "",
       "images/quote/size-3-5-8-5-rack-card"
      ],
      [
       "4\" × 6\"",
       "",
       "",
       "",
       "images/quote/size-4-6"
      ],
      [
       "4.25\" × 5.5\" (Half Letter)",
       "",
       "",
       "",
       "images/quote/size-4-25-5-5-half-letter"
      ],
      [
       "5.5\" × 8.5\" (Half Letter)",
       "",
       "popular",
       "",
       "images/quote/size-5-5-8-5-half-letter"
      ],
      [
       "8.5\" × 11\" (Letter)",
       "",
       "popular",
       "",
       "images/quote/size-8-5-11-letter"
      ],
      [
       "8.5\" × 14\" (Legal)",
       "",
       "",
       "",
       "images/quote/size-8-5-14-legal"
      ],
      [
       "11\" × 17\" (Tabloid)",
       "",
       "",
       "",
       "images/quote/size-11-17-tabloid"
      ],
      [
       "Custom Size",
       "",
       "",
       "",
       "images/quote/size-custom-size"
      ],
      [
       "Not sure — recommend for me"
      ]
     ]
    },
    {
     "k": "paper",
     "label": "Paper / material",
     "type": "paper",
     "opts": [
      [
       "60lb Uncoated",
       "Lightweight, like notebook paper — most economical",
       "",
       "",
       "images/quote/paper-60lb-uncoated"
      ],
      [
       "70lb Uncoated",
       "Slightly heavier than copy paper — good all-purpose weight",
       "",
       "",
       "images/quote/paper-70lb-uncoated"
      ],
      [
       "80lb Gloss Text",
       "Magazine-page weight with a shiny finish",
       "",
       "",
       "images/quote/paper-80lb-gloss-text"
      ],
      [
       "80lb Silk Text",
       "Magazine-page weight, no glare",
       "",
       "",
       "images/quote/paper-80lb-silk-text"
      ],
      [
       "100lb Gloss Text",
       "Our sturdiest flyer paper — glossy, premium feel",
       "popular",
       "",
       "images/quote/paper-100lb-gloss-text"
      ],
      [
       "100lb Silk Text",
       "Our sturdiest flyer paper — smooth, no glare",
       "popular",
       "",
       "images/quote/paper-100lb-silk-text"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "feel": true,
     "short": "Paper"
    },
    {
     "k": "print",
     "label": "Color and sides",
     "type": "one",
     "opts": [
      [
       "Full Color, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-double-sided"
      ],
      [
       "Full Color, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-single-sided"
      ],
      [
       "Color Front / B&W Back",
       "",
       "",
       "",
       "images/quote/print-color-front-b-w-back"
      ],
      [
       "B&W, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-double-sided"
      ],
      [
       "B&W, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-single-sided"
      ]
     ],
     "short": "Print"
    },
    {
     "k": "layout",
     "label": "Layout",
     "type": "one",
     "opts": [
      [
       "Portrait",
       "",
       "",
       "",
       "images/quote/layout-portrait"
      ],
      [
       "Landscape",
       "",
       "",
       "",
       "images/quote/layout-landscape"
      ]
     ],
     "more": true
    },
    {
     "k": "finish",
     "label": "Finish over the paper",
     "type": "one",
     "opts": [
      [
       "No Finish",
       "Standard — no additional coating",
       "popular",
       "",
       "images/quote/finish-no-finish"
      ],
      [
       "Soft Touch Laminate",
       "Velvety, suede-like laminate film — premium tactile feel",
       "",
       "",
       "images/quote/finish-soft-touch-laminate"
      ],
      [
       "Matte Laminate",
       "Flat, non-reflective laminate film — subdued matte look",
       "",
       "",
       "images/quote/finish-matte-laminate"
      ],
      [
       "Gloss Laminate",
       "Thick, high-gloss plastic film — most durable, water/scuff resistant",
       "",
       "",
       "images/quote/finish-gloss-laminate"
      ],
      [
       "Gloss UV",
       "Liquid UV coating cured under light — high gloss, thinner than laminate, less scratch-resistant",
       "",
       "",
       "images/quote/finish-gloss-uv"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — lightest protective sheen, most economical",
       "",
       "",
       "images/quote/finish-aqueous-coating"
      ]
     ],
     "more": true
    },
    {
     "k": "accent",
     "label": "Special accents (coating, foil)",
     "type": "one",
     "opts": [
      [
       "No Coating",
       "Standard finish — no additional treatment",
       "popular",
       "",
       "images/quote/accent-no-coating"
      ],
      [
       "Spot UV",
       "Selective high-gloss accents over the base finish",
       "",
       "",
       "images/quote/accent-spot-uv"
      ],
      [
       "Raised Spot UV",
       "Thicker, tactile UV you can feel — 50-micron raised gloss accents",
       "",
       "",
       "images/quote/accent-raised-spot-uv"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents — flat finish",
       "",
       "",
       "images/quote/accent-foil-stamping"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option",
       "",
       "",
       "images/quote/accent-raised-foil"
      ]
     ],
     "more": true
    },
    {
     "k": "fold",
     "label": "Folding",
     "type": "one",
     "opts": [
      [
       "No Fold",
       "",
       "",
       "",
       "images/quote/fold-no-fold"
      ],
      [
       "Half Fold",
       "",
       "",
       "",
       "images/quote/fold-half-fold"
      ],
      [
       "Tri-Fold",
       "",
       "",
       "",
       "images/quote/fold-tri-fold"
      ],
      [
       "Z-Fold",
       "",
       "",
       "",
       "images/quote/fold-z-fold"
      ],
      [
       "Quarter Fold",
       "",
       "",
       "",
       "images/quote/fold-quarter-fold"
      ],
      [
       "Gate Fold",
       "",
       "",
       "",
       "images/quote/fold-gate-fold"
      ],
      [
       "Accordion Fold",
       "",
       "",
       "",
       "images/quote/fold-accordion-fold"
      ],
      [
       "Roll Fold",
       "",
       "",
       "",
       "images/quote/fold-roll-fold"
      ]
     ],
     "more": true
    },
    {
     "k": "bundle",
     "label": "Shrink-wrap bundles",
     "type": "one",
     "opts": [
      [
       "No Bundle",
       "",
       "",
       "",
       "images/quote/bundle-no-bundle"
      ],
      [
       "25 per pack",
       "",
       "",
       "",
       "images/quote/bundle-25-per-pack"
      ],
      [
       "50 per pack",
       "",
       "",
       "",
       "images/quote/bundle-50-per-pack"
      ]
     ],
     "more": true
    },
    {
     "k": "mailing",
     "label": "Mailing",
     "type": "one",
     "opts": [
      [
       "Print only",
       "",
       "",
       "",
       "images/quote/mailing-print-only"
      ],
      [
       "I also need mailing (EDDM or my own list)",
       "",
       "",
       "",
       "images/quote/mailing-i-also-need-mailing-eddm-or-my-own-list"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/quote/p-flyers"
  },
  "Brochures": {
   "qty": [
    "25",
    "50",
    "100",
    "250",
    "500",
    "1,000",
    "2,500"
   ],
   "questions": [
    {
     "k": "size",
     "label": "Size",
     "type": "size",
     "opts": [
      [
       "8.5\" × 11\" (Letter flat)",
       "",
       "popular",
       "",
       "images/quote/size-8-5-11-letter-flat"
      ],
      [
       "8.5\" × 14\" (Legal flat)",
       "",
       "",
       "",
       "images/quote/size-8-5-14-legal-flat"
      ],
      [
       "11\" × 17\" (Tabloid flat)",
       "",
       "",
       "",
       "images/quote/size-11-17-tabloid-flat"
      ],
      [
       "11\" × 25.5\" (Tabloid flat — trifold)",
       "",
       "",
       "",
       "images/quote/size-11-25-5-tabloid-flat-trifold"
      ],
      [
       "Custom Size",
       "",
       "",
       "",
       "images/quote/size-custom-size"
      ],
      [
       "Not sure — recommend for me"
      ]
     ]
    },
    {
     "k": "paper",
     "label": "Paper / material",
     "type": "paper",
     "opts": [
      [
       "80lb Gloss Text",
       "Magazine-page weight with a shiny finish",
       "",
       "",
       "images/quote/paper-80lb-gloss-text"
      ],
      [
       "80lb Silk Text",
       "Magazine-page weight, no glare",
       "",
       "",
       "images/quote/paper-80lb-silk-text"
      ],
      [
       "100lb Gloss Text",
       "Heavier, near-cardstock feel — glossy",
       "popular",
       "",
       "images/quote/paper-100lb-gloss-text"
      ],
      [
       "100lb Silk Text",
       "Heavier, near-cardstock feel — no glare",
       "popular",
       "",
       "images/quote/paper-100lb-silk-text"
      ],
      [
       "100lb Gloss Cover",
       "Sturdy cardstock — like a magazine cover, glossy",
       "",
       "",
       "images/quote/paper-100lb-gloss-cover"
      ],
      [
       "100lb Silk Cover",
       "Sturdy cardstock — like a magazine cover, no glare",
       "",
       "",
       "images/quote/paper-100lb-silk-cover"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "feel": true,
     "short": "Paper"
    },
    {
     "k": "print",
     "label": "Color and sides",
     "type": "one",
     "opts": [
      [
       "Full Color, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-double-sided"
      ],
      [
       "Full Color, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-single-sided"
      ],
      [
       "Color Front / B&W Back",
       "",
       "",
       "",
       "images/quote/print-color-front-b-w-back"
      ],
      [
       "B&W, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-double-sided"
      ],
      [
       "B&W, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-single-sided"
      ]
     ],
     "short": "Print"
    },
    {
     "k": "finish",
     "label": "Finish over the paper",
     "type": "one",
     "opts": [
      [
       "No Finish",
       "Standard — no additional coating",
       "popular",
       "",
       "images/quote/finish-no-finish"
      ],
      [
       "Soft Touch Laminate",
       "Velvety, suede-like laminate film — premium tactile feel",
       "",
       "",
       "images/quote/finish-soft-touch-laminate"
      ],
      [
       "Matte Laminate",
       "Flat, non-reflective laminate film — subdued matte look",
       "",
       "",
       "images/quote/finish-matte-laminate"
      ],
      [
       "Gloss Laminate",
       "Thick, high-gloss plastic film — most durable, water/scuff resistant",
       "",
       "",
       "images/quote/finish-gloss-laminate"
      ],
      [
       "Gloss UV",
       "Liquid UV coating cured under light — high gloss, thinner than laminate, less scratch-resistant",
       "",
       "",
       "images/quote/finish-gloss-uv"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — lightest protective sheen, most economical",
       "",
       "",
       "images/quote/finish-aqueous-coating"
      ]
     ],
     "more": true
    },
    {
     "k": "accent",
     "label": "Special accents (coating, foil)",
     "type": "one",
     "opts": [
      [
       "No Coating",
       "Standard finish — no additional treatment",
       "popular",
       "",
       "images/quote/accent-no-coating"
      ],
      [
       "Spot UV",
       "Selective high-gloss accents over the base finish",
       "",
       "",
       "images/quote/accent-spot-uv"
      ],
      [
       "Raised Spot UV",
       "Thicker, tactile UV you can feel — 50-micron raised gloss accents",
       "",
       "",
       "images/quote/accent-raised-spot-uv"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents — flat finish",
       "",
       "",
       "images/quote/accent-foil-stamping"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option",
       "",
       "",
       "images/quote/accent-raised-foil"
      ]
     ],
     "more": true
    },
    {
     "k": "fold",
     "label": "Folding",
     "type": "one",
     "opts": [
      [
       "No Fold",
       "",
       "",
       "",
       "images/quote/fold-no-fold"
      ],
      [
       "Half Fold",
       "",
       "",
       "",
       "images/quote/fold-half-fold"
      ],
      [
       "Tri-Fold",
       "",
       "",
       "",
       "images/quote/fold-tri-fold"
      ],
      [
       "Z-Fold",
       "",
       "",
       "",
       "images/quote/fold-z-fold"
      ],
      [
       "Quarter Fold",
       "",
       "",
       "",
       "images/quote/fold-quarter-fold"
      ],
      [
       "Gate Fold",
       "",
       "",
       "",
       "images/quote/fold-gate-fold"
      ],
      [
       "Accordion Fold",
       "",
       "",
       "",
       "images/quote/fold-accordion-fold"
      ],
      [
       "Roll Fold",
       "",
       "",
       "",
       "images/quote/fold-roll-fold"
      ]
     ],
     "more": true
    },
    {
     "k": "score",
     "label": "Score / crease",
     "type": "one",
     "opts": [
      [
       "No Score",
       "",
       "",
       "",
       "images/quote/score-no-score"
      ],
      [
       "Score Before Fold",
       "",
       "",
       "",
       "images/quote/score-score-before-fold"
      ]
     ],
     "more": true
    },
    {
     "k": "bundle",
     "label": "Shrink-wrap bundles",
     "type": "one",
     "opts": [
      [
       "No Bundle",
       "",
       "",
       "",
       "images/quote/bundle-no-bundle"
      ],
      [
       "25 per pack",
       "",
       "",
       "",
       "images/quote/bundle-25-per-pack"
      ],
      [
       "50 per pack",
       "",
       "",
       "",
       "images/quote/bundle-50-per-pack"
      ]
     ],
     "more": true
    },
    {
     "k": "mailing",
     "label": "Mailing",
     "type": "one",
     "opts": [
      [
       "Print only",
       "",
       "",
       "",
       "images/quote/mailing-print-only"
      ],
      [
       "I also need mailing (EDDM or my own list)",
       "",
       "",
       "",
       "images/quote/mailing-i-also-need-mailing-eddm-or-my-own-list"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/quote/p-brochures"
  },
  "Postcards": {
   "qty": [
    "50",
    "100",
    "250",
    "500",
    "1,000",
    "2,500",
    "5,000"
   ],
   "questions": [
    {
     "k": "size",
     "label": "Size",
     "type": "size",
     "opts": [
      [
       "4\" × 6\"",
       "",
       "popular",
       "",
       "images/quote/size-4-6"
      ],
      [
       "4.25\" × 5.5\"",
       "",
       "",
       "",
       "images/quote/size-4-25-5-5"
      ],
      [
       "5\" × 7\"",
       "",
       "popular",
       "",
       "images/quote/size-5-7"
      ],
      [
       "5.5\" × 8.5\"",
       "",
       "popular",
       "",
       "images/quote/size-5-5-8-5"
      ],
      [
       "6\" × 9\"",
       "",
       "",
       "",
       "images/quote/size-6-9"
      ],
      [
       "Custom Size",
       "",
       "",
       "",
       "images/quote/size-custom-size"
      ],
      [
       "Not sure — recommend for me"
      ]
     ]
    },
    {
     "k": "paper",
     "label": "Paper / material",
     "type": "paper",
     "opts": [
      [
       "100lb Gloss Cover",
       "Thinner than 14PT — still sturdy, glossy",
       "",
       "",
       "images/quote/paper-100lb-gloss-cover"
      ],
      [
       "100lb Silk Cover",
       "Thinner than 14PT — still sturdy, satin finish, no glare",
       "",
       "",
       "images/quote/paper-100lb-silk-cover"
      ],
      [
       "14PT Gloss",
       "Standard postcard thickness — sturdy, glossy finish",
       "",
       "",
       "images/quote/paper-14pt-gloss"
      ],
      [
       "14PT Silk",
       "Standard postcard thickness — smooth satin finish, no glare",
       "popular",
       "",
       "images/quote/paper-14pt-silk"
      ],
      [
       "16PT Gloss Cover",
       "Extra-thick, glossy finish",
       "",
       "",
       "images/quote/paper-16pt-gloss-cover"
      ],
      [
       "16PT Silk Cover",
       "Extra-thick, smooth satin finish, no glare",
       "",
       "",
       "images/quote/paper-16pt-silk-cover"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "feel": true,
     "short": "Paper"
    },
    {
     "k": "print",
     "label": "Color and sides",
     "type": "one",
     "opts": [
      [
       "Full Color, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-double-sided"
      ],
      [
       "Full Color, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-single-sided"
      ],
      [
       "Color Front / B&W Back",
       "",
       "",
       "",
       "images/quote/print-color-front-b-w-back"
      ],
      [
       "B&W, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-double-sided"
      ],
      [
       "B&W, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-single-sided"
      ]
     ],
     "short": "Print"
    },
    {
     "k": "layout",
     "label": "Layout",
     "type": "one",
     "opts": [
      [
       "Portrait",
       "",
       "",
       "",
       "images/quote/layout-portrait"
      ],
      [
       "Landscape",
       "",
       "",
       "",
       "images/quote/layout-landscape"
      ]
     ],
     "more": true
    },
    {
     "k": "finish",
     "label": "Finish over the paper",
     "type": "one",
     "opts": [
      [
       "No Finish",
       "Standard — no additional coating",
       "popular",
       "",
       "images/quote/finish-no-finish"
      ],
      [
       "Soft Touch Laminate",
       "Velvety, suede-like laminate film — premium tactile feel",
       "",
       "",
       "images/quote/finish-soft-touch-laminate"
      ],
      [
       "Matte Laminate",
       "Flat, non-reflective laminate film — subdued matte look",
       "",
       "",
       "images/quote/finish-matte-laminate"
      ],
      [
       "Gloss Laminate",
       "Thick, high-gloss plastic film — most durable, water/scuff resistant",
       "",
       "",
       "images/quote/finish-gloss-laminate"
      ],
      [
       "Gloss UV",
       "Liquid UV coating cured under light — high gloss, thinner than laminate, less scratch-resistant",
       "",
       "",
       "images/quote/finish-gloss-uv"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — lightest protective sheen, most economical",
       "",
       "",
       "images/quote/finish-aqueous-coating"
      ]
     ],
     "more": true
    },
    {
     "k": "accent",
     "label": "Special accents (coating, foil)",
     "type": "one",
     "opts": [
      [
       "No Coating",
       "Standard finish — no additional treatment",
       "popular",
       "",
       "images/quote/accent-no-coating"
      ],
      [
       "Spot UV",
       "Selective high-gloss accents over the base finish",
       "",
       "",
       "images/quote/accent-spot-uv"
      ],
      [
       "Raised Spot UV",
       "Thicker, tactile UV you can feel — 50-micron raised gloss accents",
       "",
       "",
       "images/quote/accent-raised-spot-uv"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents — flat finish",
       "",
       "",
       "images/quote/accent-foil-stamping"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option",
       "",
       "",
       "images/quote/accent-raised-foil"
      ]
     ],
     "more": true
    },
    {
     "k": "corners",
     "label": "Corners",
     "type": "one",
     "opts": [
      [
       "Square",
       "",
       "",
       "",
       "images/quote/corners-square"
      ],
      [
       "Rounded (1/8\")",
       "",
       "",
       "",
       "images/quote/corners-rounded-1-8"
      ],
      [
       "Rounded (1/4\")",
       "",
       "",
       "",
       "images/quote/corners-rounded-1-4"
      ]
     ],
     "more": true
    },
    {
     "k": "mailing",
     "label": "Mailing",
     "type": "one",
     "opts": [
      [
       "Print only",
       "",
       "",
       "",
       "images/quote/mailing-print-only"
      ],
      [
       "I also need mailing (EDDM or my own list)",
       "",
       "",
       "",
       "images/quote/mailing-i-also-need-mailing-eddm-or-my-own-list"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/quote/p-postcards"
  },
  "Rack Cards": {
   "qty": [
    "250",
    "500",
    "1,000",
    "2,500",
    "5,000"
   ],
   "questions": [
    {
     "k": "size",
     "label": "Size",
     "type": "size",
     "opts": [
      [
       "3.5\" × 8.5\"",
       "",
       "",
       "",
       "images/quote/size-3-5-8-5"
      ],
      [
       "4\" × 9\"",
       "",
       "popular",
       "",
       "images/quote/size-4-9"
      ],
      [
       "Custom Size",
       "",
       "",
       "",
       "images/quote/size-custom-size"
      ],
      [
       "Not sure — recommend for me"
      ]
     ]
    },
    {
     "k": "paper",
     "label": "Paper / material",
     "type": "paper",
     "opts": [
      [
       "100lb Gloss Cover",
       "Thinner than 14PT — still sturdy enough to stand in a rack",
       "",
       "",
       "images/quote/paper-100lb-gloss-cover"
      ],
      [
       "14PT Gloss",
       "Sturdy card stock — stands up well in display racks",
       "popular",
       "",
       "images/quote/paper-14pt-gloss"
      ],
      [
       "14PT Silk",
       "Sturdy card stock, smooth satin finish, no glare",
       "",
       "",
       "images/quote/paper-14pt-silk"
      ],
      [
       "16PT Gloss Cover",
       "Extra-thick, glossy finish",
       "",
       "",
       "images/quote/paper-16pt-gloss-cover"
      ],
      [
       "16PT Silk Cover",
       "Extra-thick, smooth satin finish, no glare",
       "",
       "",
       "images/quote/paper-16pt-silk-cover"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "feel": true,
     "short": "Paper"
    },
    {
     "k": "print",
     "label": "Color and sides",
     "type": "one",
     "opts": [
      [
       "Full Color, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-double-sided"
      ],
      [
       "Full Color, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-single-sided"
      ],
      [
       "Color Front / B&W Back",
       "",
       "",
       "",
       "images/quote/print-color-front-b-w-back"
      ],
      [
       "B&W, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-double-sided"
      ],
      [
       "B&W, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-single-sided"
      ]
     ],
     "short": "Print"
    },
    {
     "k": "finish",
     "label": "Finish over the paper",
     "type": "one",
     "opts": [
      [
       "No Finish",
       "Standard — no additional coating",
       "popular",
       "",
       "images/quote/finish-no-finish"
      ],
      [
       "Soft Touch Laminate",
       "Velvety, suede-like laminate film — premium tactile feel",
       "",
       "",
       "images/quote/finish-soft-touch-laminate"
      ],
      [
       "Matte Laminate",
       "Flat, non-reflective laminate film — subdued matte look",
       "",
       "",
       "images/quote/finish-matte-laminate"
      ],
      [
       "Gloss Laminate",
       "Thick, high-gloss plastic film — most durable, water/scuff resistant",
       "",
       "",
       "images/quote/finish-gloss-laminate"
      ],
      [
       "Gloss UV",
       "Liquid UV coating cured under light — high gloss, thinner than laminate, less scratch-resistant",
       "",
       "",
       "images/quote/finish-gloss-uv"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — lightest protective sheen, most economical",
       "",
       "",
       "images/quote/finish-aqueous-coating"
      ]
     ],
     "more": true
    },
    {
     "k": "accent",
     "label": "Special accents (coating, foil)",
     "type": "one",
     "opts": [
      [
       "No Coating",
       "Standard finish — no additional treatment",
       "popular",
       "",
       "images/quote/accent-no-coating"
      ],
      [
       "Spot UV",
       "Selective high-gloss accents over the base finish",
       "",
       "",
       "images/quote/accent-spot-uv"
      ],
      [
       "Raised Spot UV",
       "Thicker, tactile UV you can feel — 50-micron raised gloss accents",
       "",
       "",
       "images/quote/accent-raised-spot-uv"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents — flat finish",
       "",
       "",
       "images/quote/accent-foil-stamping"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option",
       "",
       "",
       "images/quote/accent-raised-foil"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/quote/p-rack-cards"
  },
  "Door Hangers": {
   "qty": [
    "250",
    "500",
    "1,000",
    "2,500",
    "5,000"
   ],
   "questions": [
    {
     "k": "size",
     "label": "Size",
     "type": "size",
     "opts": [
      [
       "3.5\" × 8.5\"",
       "",
       "",
       "",
       "images/quote/size-3-5-8-5"
      ],
      [
       "3.5\" × 11\"",
       "",
       "",
       "",
       "images/quote/size-3-5-11"
      ],
      [
       "4\" × 7\"",
       "",
       "",
       "",
       "images/quote/size-4-7"
      ],
      [
       "4.25\" × 11\"",
       "",
       "popular",
       "",
       "images/quote/size-4-25-11"
      ],
      [
       "4.25\" × 14\"",
       "",
       "",
       "",
       "images/quote/size-4-25-14"
      ],
      [
       "Custom Size",
       "",
       "",
       "",
       "images/quote/size-custom-size"
      ],
      [
       "Not sure — recommend for me"
      ]
     ]
    },
    {
     "k": "paper",
     "label": "Paper / material",
     "type": "paper",
     "opts": [
      [
       "100lb Gloss Book",
       "Lighter, flyer-weight paper — most economical",
       "",
       "",
       "images/quote/paper-100lb-gloss-book"
      ],
      [
       "100lb Gloss Cover",
       "Thinner than 14PT — still sturdy",
       "",
       "",
       "images/quote/paper-100lb-gloss-cover"
      ],
      [
       "10PT EnduraACE (Weatherproof Synthetic)",
       "Thinner but tear- and weather-resistant — built for outdoor hanging",
       "",
       "",
       "images/quote/paper-10pt-enduraace-weatherproof-synthetic"
      ],
      [
       "14PT Gloss",
       "Standard sturdy card stock, glossy finish",
       "popular",
       "",
       "images/quote/paper-14pt-gloss"
      ],
      [
       "14PT Silk",
       "Standard sturdy card stock, smooth satin finish, no glare",
       "",
       "",
       "images/quote/paper-14pt-silk"
      ],
      [
       "16PT Gloss Cover",
       "Extra-thick, glossy finish",
       "",
       "",
       "images/quote/paper-16pt-gloss-cover"
      ],
      [
       "16PT Silk Cover",
       "Extra-thick, smooth satin finish, no glare",
       "",
       "",
       "images/quote/paper-16pt-silk-cover"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "feel": true,
     "short": "Paper"
    },
    {
     "k": "print",
     "label": "Color and sides",
     "type": "one",
     "opts": [
      [
       "Full Color, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-double-sided"
      ],
      [
       "Full Color, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-single-sided"
      ],
      [
       "Color Front / B&W Back",
       "",
       "",
       "",
       "images/quote/print-color-front-b-w-back"
      ],
      [
       "B&W, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-double-sided"
      ],
      [
       "B&W, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-single-sided"
      ]
     ],
     "short": "Print"
    },
    {
     "k": "finish",
     "label": "Finish over the paper",
     "type": "one",
     "opts": [
      [
       "No Finish",
       "Standard — no additional coating",
       "popular",
       "",
       "images/quote/finish-no-finish"
      ],
      [
       "Soft Touch Laminate",
       "Velvety, suede-like laminate film — premium tactile feel",
       "",
       "",
       "images/quote/finish-soft-touch-laminate"
      ],
      [
       "Matte Laminate",
       "Flat, non-reflective laminate film — subdued matte look",
       "",
       "",
       "images/quote/finish-matte-laminate"
      ],
      [
       "Gloss Laminate",
       "Thick, high-gloss plastic film — most durable, water/scuff resistant",
       "",
       "",
       "images/quote/finish-gloss-laminate"
      ],
      [
       "Gloss UV",
       "Liquid UV coating cured under light — high gloss, thinner than laminate, less scratch-resistant",
       "",
       "",
       "images/quote/finish-gloss-uv"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — lightest protective sheen, most economical",
       "",
       "",
       "images/quote/finish-aqueous-coating"
      ]
     ],
     "more": true
    },
    {
     "k": "accent",
     "label": "Special accents (coating, foil)",
     "type": "one",
     "opts": [
      [
       "No Coating",
       "Standard finish — no additional treatment",
       "popular",
       "",
       "images/quote/accent-no-coating"
      ],
      [
       "Spot UV",
       "Selective high-gloss accents over the base finish",
       "",
       "",
       "images/quote/accent-spot-uv"
      ],
      [
       "Raised Spot UV",
       "Thicker, tactile UV you can feel — 50-micron raised gloss accents",
       "",
       "",
       "images/quote/accent-raised-spot-uv"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents — flat finish",
       "",
       "",
       "images/quote/accent-foil-stamping"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option",
       "",
       "",
       "images/quote/accent-raised-foil"
      ]
     ],
     "more": true
    },
    {
     "k": "diecut",
     "label": "Die-cut shape",
     "type": "one",
     "opts": [
      [
       "Standard",
       "",
       "",
       "",
       "images/quote/diecut-standard"
      ],
      [
       "Arch",
       "",
       "",
       "",
       "images/quote/diecut-arch"
      ],
      [
       "Starburst",
       "",
       "",
       "",
       "images/quote/diecut-starburst"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/quote/p-door-hangers"
  },
  "Table Tents": {
   "qty": [
    "50",
    "100",
    "250",
    "500"
   ],
   "questions": [
    {
     "k": "size",
     "label": "Size",
     "type": "size",
     "opts": [
      [
       "4\" × 6\"",
       "",
       "popular",
       "",
       "images/quote/size-4-6"
      ],
      [
       "5\" × 5.5\"",
       "",
       "",
       "",
       "images/quote/size-5-5-5"
      ],
      [
       "3.5\" × 8.5\" (Tall)",
       "",
       "",
       "",
       "images/quote/size-3-5-8-5-tall"
      ],
      [
       "5\" × 7\"",
       "",
       "",
       "",
       "images/quote/size-5-7"
      ],
      [
       "Custom Size",
       "",
       "",
       "",
       "images/quote/size-custom-size"
      ],
      [
       "Not sure — recommend for me"
      ]
     ]
    },
    {
     "k": "paper",
     "label": "Paper / material",
     "type": "paper",
     "opts": [
      [
       "100lb Gloss Cover",
       "Thinner than 14PT — still sturdy enough to stand",
       "",
       "",
       "images/quote/paper-100lb-gloss-cover"
      ],
      [
       "14PT Gloss",
       "Sturdy card stock — stands up on its own",
       "popular",
       "",
       "images/quote/paper-14pt-gloss"
      ],
      [
       "14PT Silk",
       "Sturdy card stock, smooth satin finish, no glare",
       "",
       "",
       "images/quote/paper-14pt-silk"
      ],
      [
       "16PT Gloss Cover",
       "Extra-thick, glossy finish",
       "",
       "",
       "images/quote/paper-16pt-gloss-cover"
      ],
      [
       "16PT Silk Cover",
       "Extra-thick, smooth satin finish, no glare",
       "",
       "",
       "images/quote/paper-16pt-silk-cover"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "feel": true,
     "short": "Paper"
    },
    {
     "k": "print",
     "label": "Color and sides",
     "type": "one",
     "opts": [
      [
       "Full Color, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-double-sided"
      ],
      [
       "Full Color, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-single-sided"
      ],
      [
       "Color Front / B&W Back",
       "",
       "",
       "",
       "images/quote/print-color-front-b-w-back"
      ],
      [
       "B&W, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-double-sided"
      ],
      [
       "B&W, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-single-sided"
      ]
     ],
     "short": "Print"
    },
    {
     "k": "finish",
     "label": "Finish over the paper",
     "type": "one",
     "opts": [
      [
       "No Finish",
       "Standard — no additional coating",
       "popular",
       "",
       "images/quote/finish-no-finish"
      ],
      [
       "Soft Touch Laminate",
       "Velvety, suede-like laminate film — premium tactile feel",
       "",
       "",
       "images/quote/finish-soft-touch-laminate"
      ],
      [
       "Matte Laminate",
       "Flat, non-reflective laminate film — subdued matte look",
       "",
       "",
       "images/quote/finish-matte-laminate"
      ],
      [
       "Gloss Laminate",
       "Thick, high-gloss plastic film — most durable, water/scuff resistant",
       "",
       "",
       "images/quote/finish-gloss-laminate"
      ],
      [
       "Gloss UV",
       "Liquid UV coating cured under light — high gloss, thinner than laminate, less scratch-resistant",
       "",
       "",
       "images/quote/finish-gloss-uv"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — lightest protective sheen, most economical",
       "",
       "",
       "images/quote/finish-aqueous-coating"
      ]
     ],
     "more": true
    },
    {
     "k": "accent",
     "label": "Special accents (coating, foil)",
     "type": "one",
     "opts": [
      [
       "No Coating",
       "Standard finish — no additional treatment",
       "popular",
       "",
       "images/quote/accent-no-coating"
      ],
      [
       "Spot UV",
       "Selective high-gloss accents over the base finish",
       "",
       "",
       "images/quote/accent-spot-uv"
      ],
      [
       "Raised Spot UV",
       "Thicker, tactile UV you can feel — 50-micron raised gloss accents",
       "",
       "",
       "images/quote/accent-raised-spot-uv"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents — flat finish",
       "",
       "",
       "images/quote/accent-foil-stamping"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option",
       "",
       "",
       "images/quote/accent-raised-foil"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/quote/p-table-tents"
  },
  "Calendars": {
   "qty": [
    "25",
    "50",
    "100",
    "250"
   ],
   "questions": [
    {
     "k": "binding",
     "label": "Binding",
     "type": "one",
     "opts": [
      [
       "Saddle Stitch",
       "",
       "",
       "",
       "images/quote/binding-saddle-stitch"
      ],
      [
       "Spiral / Coil",
       "",
       "",
       "",
       "images/quote/binding-spiral-coil"
      ],
      [
       "Perfect Bind",
       "",
       "",
       "",
       "images/quote/binding-perfect-bind"
      ]
     ]
    },
    {
     "k": "size",
     "label": "Size",
     "type": "size",
     "opts": [
      [
       "8.5\" × 11\" (Wall)",
       "",
       "popular",
       "",
       "images/quote/size-8-5-11-wall"
      ],
      [
       "11\" × 17\" (Wall)",
       "",
       "",
       "",
       "images/quote/size-11-17-wall"
      ],
      [
       "12\" × 12\" (Photo)",
       "",
       "",
       "",
       "images/quote/size-12-12-photo"
      ],
      [
       "4\" × 9\" (Desk Tent)",
       "",
       "",
       "",
       "images/quote/size-4-9-desk-tent"
      ],
      [
       "Custom Size",
       "",
       "",
       "",
       "images/quote/size-custom-size"
      ],
      [
       "Not sure — recommend for me"
      ]
     ]
    },
    {
     "k": "paper",
     "label": "Paper / material",
     "type": "paper",
     "opts": [
      [
       "100lb Gloss Text",
       "Sturdy, magazine-cover weight — glossy",
       "popular",
       "",
       "images/quote/paper-100lb-gloss-text"
      ],
      [
       "100lb Silk Text",
       "Sturdy, magazine-cover weight — no glare",
       "",
       "",
       "images/quote/paper-100lb-silk-text"
      ],
      [
       "14PT Gloss Cover",
       "Thicker card stock — extra durable for daily flipping",
       "",
       "",
       "images/quote/paper-14pt-gloss-cover"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "feel": true,
     "short": "Paper"
    },
    {
     "k": "print",
     "label": "Color and sides",
     "type": "one",
     "opts": [
      [
       "Full Color, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-double-sided"
      ],
      [
       "Full Color, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-single-sided"
      ],
      [
       "Color Front / B&W Back",
       "",
       "",
       "",
       "images/quote/print-color-front-b-w-back"
      ],
      [
       "B&W, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-double-sided"
      ],
      [
       "B&W, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-single-sided"
      ]
     ],
     "short": "Print"
    },
    {
     "k": "finish",
     "label": "Finish over the paper",
     "type": "one",
     "opts": [
      [
       "No Finish",
       "Standard — no additional coating",
       "popular",
       "",
       "images/quote/finish-no-finish"
      ],
      [
       "Soft Touch Laminate",
       "Velvety, suede-like laminate film — premium tactile feel",
       "",
       "",
       "images/quote/finish-soft-touch-laminate"
      ],
      [
       "Matte Laminate",
       "Flat, non-reflective laminate film — subdued matte look",
       "",
       "",
       "images/quote/finish-matte-laminate"
      ],
      [
       "Gloss Laminate",
       "Thick, high-gloss plastic film — most durable, water/scuff resistant — good for daily-handled cover",
       "",
       "",
       "images/quote/finish-gloss-laminate"
      ],
      [
       "Gloss UV",
       "Liquid UV coating cured under light — high gloss, thinner than laminate, less scratch-resistant",
       "",
       "",
       "images/quote/finish-gloss-uv"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — lightest protective sheen, most economical",
       "",
       "",
       "images/quote/finish-aqueous-coating"
      ]
     ],
     "more": true
    },
    {
     "k": "accent",
     "label": "Special accents (coating, foil)",
     "type": "one",
     "opts": [
      [
       "No Coating",
       "Standard finish — no additional treatment",
       "popular",
       "",
       "images/quote/accent-no-coating"
      ],
      [
       "Spot UV",
       "Selective high-gloss accents over the base finish",
       "",
       "",
       "images/quote/accent-spot-uv"
      ],
      [
       "Raised Spot UV",
       "Thicker, tactile UV you can feel — 50-micron raised gloss accents",
       "",
       "",
       "images/quote/accent-raised-spot-uv"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents — flat finish",
       "",
       "",
       "images/quote/accent-foil-stamping"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option",
       "",
       "",
       "images/quote/accent-raised-foil"
      ]
     ],
     "more": true
    },
    {
     "k": "months",
     "label": "Calendar length",
     "type": "one",
     "opts": [
      [
       "6-Month",
       "",
       "",
       "",
       "images/quote/months-6-month"
      ],
      [
       "12-Month",
       "",
       "",
       "",
       "images/quote/months-12-month"
      ],
      [
       "18-Month",
       "",
       "",
       "",
       "images/quote/months-18-month"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/quote/p-calendars"
  },
  "Menus": {
   "qty": [
    "25",
    "50",
    "100",
    "250",
    "500"
   ],
   "questions": [
    {
     "k": "size",
     "label": "Size",
     "type": "size",
     "opts": [
      [
       "4.25\" × 11\" (Single fold)",
       "",
       "",
       "",
       "images/quote/size-4-25-11-single-fold"
      ],
      [
       "8.5\" × 11\" (Letter)",
       "",
       "popular",
       "",
       "images/quote/size-8-5-11-letter"
      ],
      [
       "8.5\" × 14\" (Legal)",
       "",
       "popular",
       "",
       "images/quote/size-8-5-14-legal"
      ],
      [
       "11\" × 17\" (Tabloid)",
       "",
       "",
       "",
       "images/quote/size-11-17-tabloid"
      ],
      [
       "Custom Size",
       "",
       "",
       "",
       "images/quote/size-custom-size"
      ],
      [
       "Not sure — recommend for me"
      ]
     ]
    },
    {
     "k": "paper",
     "label": "Paper / material",
     "type": "paper",
     "opts": [
      [
       "80lb Gloss Text",
       "Lighter, flyer-weight — budget option, glossy",
       "",
       "",
       "images/quote/paper-80lb-gloss-text"
      ],
      [
       "80lb Silk Text",
       "Lighter, flyer-weight — budget option, no glare",
       "",
       "",
       "images/quote/paper-80lb-silk-text"
      ],
      [
       "100lb Gloss Text",
       "Sturdier text weight, glossy",
       "",
       "",
       "images/quote/paper-100lb-gloss-text"
      ],
      [
       "100lb Silk Text",
       "Sturdier text weight, no glare",
       "",
       "",
       "images/quote/paper-100lb-silk-text"
      ],
      [
       "100lb Gloss Cover",
       "Sturdy cardstock — holds up well to handling & spills, glossy",
       "popular",
       "",
       "images/quote/paper-100lb-gloss-cover"
      ],
      [
       "100lb Silk Cover",
       "Sturdy cardstock — holds up well to handling & spills, no glare",
       "popular",
       "",
       "images/quote/paper-100lb-silk-cover"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "feel": true,
     "short": "Paper"
    },
    {
     "k": "print",
     "label": "Color and sides",
     "type": "one",
     "opts": [
      [
       "Full Color, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-double-sided"
      ],
      [
       "Full Color, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-single-sided"
      ],
      [
       "Color Front / B&W Back",
       "",
       "",
       "",
       "images/quote/print-color-front-b-w-back"
      ],
      [
       "B&W, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-double-sided"
      ],
      [
       "B&W, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-single-sided"
      ]
     ],
     "short": "Print"
    },
    {
     "k": "layout",
     "label": "Layout",
     "type": "one",
     "opts": [
      [
       "Portrait",
       "",
       "",
       "",
       "images/quote/layout-portrait"
      ],
      [
       "Landscape",
       "",
       "",
       "",
       "images/quote/layout-landscape"
      ]
     ],
     "more": true
    },
    {
     "k": "finish",
     "label": "Finish over the paper",
     "type": "one",
     "opts": [
      [
       "No Finish",
       "Standard — no additional coating",
       "popular",
       "",
       "images/quote/finish-no-finish"
      ],
      [
       "Soft Touch Laminate",
       "Velvety, suede-like laminate film — premium tactile feel",
       "",
       "",
       "images/quote/finish-soft-touch-laminate"
      ],
      [
       "Matte Laminate",
       "Flat, non-reflective laminate film — subdued matte look",
       "",
       "",
       "images/quote/finish-matte-laminate"
      ],
      [
       "Gloss Laminate",
       "Thick, high-gloss plastic film — most durable, water/scuff resistant, best for wipeable menus",
       "",
       "",
       "images/quote/finish-gloss-laminate"
      ],
      [
       "Gloss UV",
       "Liquid UV coating cured under light — high gloss, thinner than laminate, less scratch-resistant",
       "",
       "",
       "images/quote/finish-gloss-uv"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — lightest protective sheen, most economical",
       "",
       "",
       "images/quote/finish-aqueous-coating"
      ]
     ],
     "more": true
    },
    {
     "k": "accent",
     "label": "Special accents (coating, foil)",
     "type": "one",
     "opts": [
      [
       "No Coating",
       "Standard finish — no additional treatment",
       "popular",
       "",
       "images/quote/accent-no-coating"
      ],
      [
       "Spot UV",
       "Selective high-gloss accents over the base finish",
       "",
       "",
       "images/quote/accent-spot-uv"
      ],
      [
       "Raised Spot UV",
       "Thicker, tactile UV you can feel — 50-micron raised gloss accents",
       "",
       "",
       "images/quote/accent-raised-spot-uv"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents — flat finish",
       "",
       "",
       "images/quote/accent-foil-stamping"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option",
       "",
       "",
       "images/quote/accent-raised-foil"
      ]
     ],
     "more": true
    },
    {
     "k": "fold",
     "label": "Folding",
     "type": "one",
     "opts": [
      [
       "No Fold",
       "",
       "",
       "",
       "images/quote/fold-no-fold"
      ],
      [
       "Half Fold",
       "",
       "",
       "",
       "images/quote/fold-half-fold"
      ],
      [
       "Tri-Fold",
       "",
       "",
       "",
       "images/quote/fold-tri-fold"
      ],
      [
       "Z-Fold",
       "",
       "",
       "",
       "images/quote/fold-z-fold"
      ],
      [
       "Quarter Fold",
       "",
       "",
       "",
       "images/quote/fold-quarter-fold"
      ],
      [
       "Gate Fold",
       "",
       "",
       "",
       "images/quote/fold-gate-fold"
      ],
      [
       "Accordion Fold",
       "",
       "",
       "",
       "images/quote/fold-accordion-fold"
      ],
      [
       "Roll Fold",
       "",
       "",
       "",
       "images/quote/fold-roll-fold"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/quote/p-menus"
  },
  "Placemats": {
   "qty": [
    "250",
    "500",
    "1,000",
    "2,500",
    "5,000"
   ],
   "questions": [
    {
     "k": "size",
     "label": "Size",
     "type": "size",
     "opts": [
      [
       "10\" × 14\" (Standard)",
       "",
       "popular",
       "",
       "images/quote/size-10-14-standard"
      ],
      [
       "12\" × 16\"",
       "",
       "",
       "",
       "images/quote/size-12-16"
      ],
      [
       "Custom Size",
       "",
       "",
       "",
       "images/quote/size-custom-size"
      ],
      [
       "Not sure — recommend for me"
      ]
     ]
    },
    {
     "k": "paper",
     "label": "Paper / material",
     "type": "paper",
     "opts": [
      [
       "60lb Uncoated",
       "Lightweight, economical — standard disposable placemat weight",
       "popular",
       "",
       "images/quote/paper-60lb-uncoated"
      ],
      [
       "70lb Uncoated",
       "Slightly heavier — holds up a bit better under plates/utensils",
       "",
       "",
       "images/quote/paper-70lb-uncoated"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "feel": true,
     "short": "Paper"
    },
    {
     "k": "print",
     "label": "Color and sides",
     "type": "one",
     "opts": [
      [
       "Full Color, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-double-sided"
      ],
      [
       "Full Color, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-single-sided"
      ],
      [
       "Color Front / B&W Back",
       "",
       "",
       "",
       "images/quote/print-color-front-b-w-back"
      ],
      [
       "B&W, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-double-sided"
      ],
      [
       "B&W, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-single-sided"
      ]
     ],
     "short": "Print"
    }
   ],
   "img": "images/quote/p-placemats"
  },
  "Business Cards": {
   "qty": [
    "100",
    "250",
    "500",
    "1,000",
    "2,500"
   ],
   "questions": [
    {
     "k": "size",
     "label": "Size",
     "type": "size",
     "opts": [
      [
       "3.5\" × 2\" (Standard)",
       "",
       "popular",
       "",
       "images/quote/size-3-5-2-standard"
      ],
      [
       "1.75\" × 3.5\" (Slim)",
       "",
       "",
       "",
       "images/quote/size-1-75-3-5-slim"
      ],
      [
       "2\" × 2\" (Square)",
       "",
       "",
       "",
       "images/quote/size-2-2-square"
      ],
      [
       "Custom Size",
       "",
       "",
       "",
       "images/quote/size-custom-size"
      ],
      [
       "Not sure — recommend for me"
      ]
     ]
    },
    {
     "k": "paper",
     "label": "Paper / material",
     "type": "paper",
     "opts": [
      [
       "100lb Cover (Slim)",
       "Noticeably thinner than 14PT — easy on the wallet!",
       "",
       "",
       "images/quote/paper-100lb-cover-slim"
      ],
      [
       "14PT Gloss",
       "Sharp colors, glossy finish",
       "",
       "",
       "images/quote/paper-14pt-gloss"
      ],
      [
       "14PT Silk",
       "Most common choice — smooth satin finish, no glare",
       "popular",
       "",
       "images/quote/paper-14pt-silk"
      ],
      [
       "16PT Silk",
       "Smooth satin finish, rich colors — one of our most-used weights (Veritiv Endurance)",
       "popular",
       "",
       "images/quote/paper-16pt-silk"
      ],
      [
       "16PT Linen",
       "Textured classic feel",
       "",
       "",
       "images/quote/paper-16pt-linen"
      ],
      [
       "Metallic / Foil Board",
       "Eye-catching shimmer — great for luxury brands",
       "",
       "",
       "images/quote/paper-metallic-foil-board"
      ],
      [
       "Plastic / PVC",
       "Waterproof & durable — credit card feel",
       "",
       "",
       "images/quote/paper-plastic-pvc"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "feel": true,
     "short": "Paper"
    },
    {
     "k": "print",
     "label": "Color and sides",
     "type": "one",
     "opts": [
      [
       "Full Color, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-double-sided"
      ],
      [
       "Full Color, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-single-sided"
      ],
      [
       "Color Front / B&W Back",
       "",
       "",
       "",
       "images/quote/print-color-front-b-w-back"
      ],
      [
       "B&W, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-double-sided"
      ],
      [
       "B&W, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-single-sided"
      ]
     ],
     "short": "Print"
    },
    {
     "k": "layout",
     "label": "Layout",
     "type": "one",
     "opts": [
      [
       "Portrait",
       "",
       "",
       "",
       "images/quote/layout-portrait"
      ],
      [
       "Landscape",
       "",
       "",
       "",
       "images/quote/layout-landscape"
      ]
     ],
     "more": true
    },
    {
     "k": "finish",
     "label": "Finish over the paper",
     "type": "one",
     "opts": [
      [
       "No Finish",
       "Standard — no additional lamination",
       "popular",
       "",
       "images/quote/finish-no-finish"
      ],
      [
       "Soft Touch Laminate",
       "Velvety, suede-like laminate film — premium tactile feel",
       "",
       "",
       "images/quote/finish-soft-touch-laminate"
      ],
      [
       "Matte Laminate",
       "Flat, non-reflective laminate film — subdued matte look",
       "",
       "",
       "images/quote/finish-matte-laminate"
      ],
      [
       "Gloss Laminate",
       "Thick, high-gloss plastic film — most durable, water/scuff resistant",
       "",
       "",
       "images/quote/finish-gloss-laminate"
      ],
      [
       "Gloss UV",
       "Liquid UV coating cured under light — high gloss, thinner than laminate, less scratch-resistant",
       "",
       "",
       "images/quote/finish-gloss-uv"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — lightest protective sheen, most economical",
       "",
       "",
       "images/quote/finish-aqueous-coating"
      ]
     ],
     "more": true
    },
    {
     "k": "accent",
     "label": "Special accents (coating, foil)",
     "type": "one",
     "opts": [
      [
       "No Coating",
       "Standard finish — no additional treatment",
       "popular",
       "",
       "images/quote/accent-no-coating"
      ],
      [
       "Spot UV",
       "Selective high-gloss accents over the base finish",
       "",
       "",
       "images/quote/accent-spot-uv"
      ],
      [
       "Raised Spot UV",
       "Thicker, tactile UV you can feel — 50-micron raised gloss accents",
       "",
       "",
       "images/quote/accent-raised-spot-uv"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents — flat finish",
       "",
       "",
       "images/quote/accent-foil-stamping"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option",
       "",
       "",
       "images/quote/accent-raised-foil"
      ]
     ],
     "more": true
    },
    {
     "k": "corners",
     "label": "Corners",
     "type": "one",
     "opts": [
      [
       "Square",
       "",
       "",
       "",
       "images/quote/corners-square"
      ],
      [
       "Rounded (1/8\")",
       "",
       "",
       "",
       "images/quote/corners-rounded-1-8"
      ],
      [
       "Rounded (1/4\")",
       "",
       "",
       "",
       "images/quote/corners-rounded-1-4"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/quote/p-business-cards"
  },
  "Hang Tags": {
   "qty": [
    "100",
    "250",
    "500",
    "1,000",
    "2,500"
   ],
   "questions": [
    {
     "k": "size",
     "label": "Size",
     "type": "size",
     "opts": [
      [
       "2\" × 3.5\"",
       "",
       "popular",
       "",
       "images/quote/size-2-3-5"
      ],
      [
       "2\" × 4\"",
       "",
       "",
       "",
       "images/quote/size-2-4"
      ],
      [
       "3\" × 3\"",
       "",
       "",
       "",
       "images/quote/size-3-3"
      ],
      [
       "3.5\" × 5\"",
       "",
       "",
       "",
       "images/quote/size-3-5-5"
      ],
      [
       "Custom Size",
       "",
       "",
       "",
       "images/quote/size-custom-size"
      ],
      [
       "Not sure — recommend for me"
      ]
     ]
    },
    {
     "k": "paper",
     "label": "Paper / material",
     "type": "paper",
     "opts": [
      [
       "14PT Gloss",
       "Standard sturdy card stock, glossy finish",
       "",
       "",
       "images/quote/paper-14pt-gloss"
      ],
      [
       "14PT Silk",
       "Standard sturdy card stock, smooth satin finish, no glare",
       "popular",
       "",
       "images/quote/paper-14pt-silk"
      ],
      [
       "16PT Gloss Cover",
       "Extra-thick, glossy finish",
       "",
       "",
       "images/quote/paper-16pt-gloss-cover"
      ],
      [
       "16PT Silk Cover",
       "Extra-thick, smooth satin finish, no glare",
       "",
       "",
       "images/quote/paper-16pt-silk-cover"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "feel": true,
     "short": "Paper"
    },
    {
     "k": "print",
     "label": "Color and sides",
     "type": "one",
     "opts": [
      [
       "Full Color, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-double-sided"
      ],
      [
       "Full Color, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-single-sided"
      ],
      [
       "Color Front / B&W Back",
       "",
       "",
       "",
       "images/quote/print-color-front-b-w-back"
      ],
      [
       "B&W, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-double-sided"
      ],
      [
       "B&W, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-single-sided"
      ]
     ],
     "short": "Print"
    },
    {
     "k": "finish",
     "label": "Finish over the paper",
     "type": "one",
     "opts": [
      [
       "No Finish",
       "Standard — no additional coating",
       "popular",
       "",
       "images/quote/finish-no-finish"
      ],
      [
       "Soft Touch Laminate",
       "Velvety, suede-like laminate film — premium tactile feel",
       "",
       "",
       "images/quote/finish-soft-touch-laminate"
      ],
      [
       "Matte Laminate",
       "Flat, non-reflective laminate film — subdued matte look",
       "",
       "",
       "images/quote/finish-matte-laminate"
      ],
      [
       "Gloss Laminate",
       "Thick, high-gloss plastic film — most durable, water/scuff resistant",
       "",
       "",
       "images/quote/finish-gloss-laminate"
      ],
      [
       "Gloss UV",
       "Liquid UV coating cured under light — high gloss, thinner than laminate, less scratch-resistant",
       "",
       "",
       "images/quote/finish-gloss-uv"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — lightest protective sheen, most economical",
       "",
       "",
       "images/quote/finish-aqueous-coating"
      ]
     ],
     "more": true
    },
    {
     "k": "accent",
     "label": "Special accents (coating, foil)",
     "type": "one",
     "opts": [
      [
       "No Coating",
       "Standard finish — no additional treatment",
       "popular",
       "",
       "images/quote/accent-no-coating"
      ],
      [
       "Spot UV",
       "Selective high-gloss accents over the base finish",
       "",
       "",
       "images/quote/accent-spot-uv"
      ],
      [
       "Raised Spot UV",
       "Thicker, tactile UV you can feel — 50-micron raised gloss accents",
       "",
       "",
       "images/quote/accent-raised-spot-uv"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents — flat finish",
       "",
       "",
       "images/quote/accent-foil-stamping"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option",
       "",
       "",
       "images/quote/accent-raised-foil"
      ]
     ],
     "more": true
    },
    {
     "k": "corners",
     "label": "Corners",
     "type": "one",
     "opts": [
      [
       "Square",
       "",
       "",
       "",
       "images/quote/corners-square"
      ],
      [
       "Rounded (1/8\")",
       "",
       "",
       "",
       "images/quote/corners-rounded-1-8"
      ],
      [
       "Rounded (1/4\")",
       "",
       "",
       "",
       "images/quote/corners-rounded-1-4"
      ]
     ],
     "more": true
    },
    {
     "k": "hang",
     "label": "Hang method",
     "type": "one",
     "opts": [
      [
       "No Hole",
       "",
       "",
       "",
       "images/quote/hang-no-hole"
      ],
      [
       "Drill Hole (1/8\")",
       "",
       "",
       "",
       "images/quote/hang-drill-hole-1-8"
      ],
      [
       "Bottleneck Die-Cut",
       "",
       "",
       "",
       "images/quote/hang-bottleneck-die-cut"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/quote/p-hang-tags"
  },
  "Certificates": {
   "qty": [
    "25",
    "50",
    "100",
    "250",
    "500"
   ],
   "questions": [
    {
     "k": "size",
     "label": "Size",
     "type": "size",
     "opts": [
      [
       "8.5\" × 11\" (Letter)",
       "",
       "popular",
       "",
       "images/quote/size-8-5-11-letter"
      ],
      [
       "8.5\" × 14\" (Legal)",
       "",
       "",
       "",
       "images/quote/size-8-5-14-legal"
      ],
      [
       "11\" × 8.5\" (Landscape)",
       "",
       "",
       "",
       "images/quote/size-11-8-5-landscape"
      ],
      [
       "Custom Size",
       "",
       "",
       "",
       "images/quote/size-custom-size"
      ],
      [
       "Not sure — recommend for me"
      ]
     ]
    },
    {
     "k": "paper",
     "label": "Paper / material",
     "type": "paper",
     "opts": [
      [
       "80lb Gloss Cover",
       "Solid cardstock feel, glossy",
       "",
       "",
       "images/quote/paper-80lb-gloss-cover"
      ],
      [
       "80lb Uncoated Cover",
       "Solid cardstock feel, natural non-shiny finish",
       "",
       "",
       "images/quote/paper-80lb-uncoated-cover"
      ],
      [
       "100lb Gloss Cover",
       "Our sturdiest option — premium glossy finish",
       "popular",
       "",
       "images/quote/paper-100lb-gloss-cover"
      ],
      [
       "100lb Silk Cover",
       "Our sturdiest option — premium, no glare",
       "",
       "",
       "images/quote/paper-100lb-silk-cover"
      ],
      [
       "Parchment / Linen",
       "Textured, formal finish — traditional certificate look",
       "popular",
       "",
       "images/quote/paper-parchment-linen"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "feel": true,
     "short": "Paper"
    },
    {
     "k": "print",
     "label": "Color and sides",
     "type": "one",
     "opts": [
      [
       "Full Color, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-double-sided"
      ],
      [
       "Full Color, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-single-sided"
      ],
      [
       "Color Front / B&W Back",
       "",
       "",
       "",
       "images/quote/print-color-front-b-w-back"
      ],
      [
       "B&W, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-double-sided"
      ],
      [
       "B&W, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-single-sided"
      ]
     ],
     "short": "Print"
    },
    {
     "k": "finish",
     "label": "Finish over the paper",
     "type": "one",
     "opts": [
      [
       "No Finish",
       "Standard — no additional coating (needed if the certificate will be signed after printing)",
       "popular",
       "",
       "images/quote/finish-no-finish"
      ],
      [
       "Soft Touch Laminate",
       "Velvety, suede-like laminate film — premium tactile feel",
       "",
       "",
       "images/quote/finish-soft-touch-laminate"
      ],
      [
       "Matte Laminate",
       "Flat, non-reflective laminate film — subdued matte look",
       "",
       "",
       "images/quote/finish-matte-laminate"
      ],
      [
       "Gloss Laminate",
       "Thick, high-gloss plastic film — most durable, good for display/award certificates",
       "",
       "",
       "images/quote/finish-gloss-laminate"
      ],
      [
       "Gloss UV",
       "Liquid UV coating cured under light — high gloss, thinner than laminate, less scratch-resistant",
       "",
       "",
       "images/quote/finish-gloss-uv"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — lightest protective sheen, most economical",
       "",
       "",
       "images/quote/finish-aqueous-coating"
      ]
     ],
     "more": true
    },
    {
     "k": "accent",
     "label": "Special accents (coating, foil)",
     "type": "one",
     "opts": [
      [
       "No Coating",
       "Standard finish — no additional treatment",
       "popular",
       "",
       "images/quote/accent-no-coating"
      ],
      [
       "Spot UV",
       "Selective high-gloss accents over the base finish",
       "",
       "",
       "images/quote/accent-spot-uv"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents — flat finish, classic gold/silver seal look",
       "",
       "",
       "images/quote/accent-foil-stamping"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option",
       "",
       "",
       "images/quote/accent-raised-foil"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/quote/p-certificates"
  },
  "Stickers & Labels": {
   "qty": [
    "50",
    "100",
    "250",
    "500",
    "1,000",
    "2,500"
   ],
   "questions": [
    {
     "k": "size",
     "label": "Size",
     "type": "size",
     "opts": [
      [
       "2\" × 2\"",
       "",
       "",
       "",
       "images/quote/size-2-2"
      ],
      [
       "2\" × 3\"",
       "",
       "",
       "",
       "images/quote/size-2-3"
      ],
      [
       "3\" × 3\"",
       "",
       "popular",
       "",
       "images/quote/size-3-3"
      ],
      [
       "3\" × 4\"",
       "",
       "popular",
       "",
       "images/quote/size-3-4"
      ],
      [
       "4\" × 4\"",
       "",
       "",
       "",
       "images/quote/size-4-4"
      ],
      [
       "4\" × 6\"",
       "",
       "",
       "",
       "images/quote/size-4-6"
      ],
      [
       "Custom Size",
       "",
       "",
       "",
       "images/quote/size-custom-size"
      ],
      [
       "Not sure — recommend for me"
      ]
     ]
    },
    {
     "k": "paper",
     "label": "Paper / material",
     "type": "paper",
     "opts": [
      [
       "White Gloss Vinyl",
       "",
       "popular",
       "",
       "images/quote/paper-white-gloss-vinyl"
      ],
      [
       "White Silk Vinyl",
       "",
       "",
       "",
       "images/quote/paper-white-silk-vinyl"
      ],
      [
       "Clear Gloss Vinyl",
       "",
       "",
       "",
       "images/quote/paper-clear-gloss-vinyl"
      ],
      [
       "Clear Silk Vinyl",
       "",
       "",
       "",
       "images/quote/paper-clear-silk-vinyl"
      ],
      [
       "Kraft / Recycled",
       "",
       "",
       "",
       "images/quote/paper-kraft-recycled"
      ],
      [
       "Foil (Gold/Silver)",
       "",
       "",
       "",
       "images/quote/paper-foil-gold-silver"
      ],
      [
       "Holographic",
       "",
       "",
       "",
       "images/quote/paper-holographic"
      ],
      [
       "Glitter",
       "",
       "",
       "",
       "images/quote/paper-glitter"
      ],
      [
       "Reflective",
       "",
       "",
       "",
       "images/quote/paper-reflective"
      ],
      [
       "Glow-in-the-Dark",
       "",
       "",
       "",
       "images/quote/paper-glow-in-the-dark"
      ],
      [
       "Static Cling (Removable)",
       "",
       "",
       "",
       "images/quote/paper-static-cling-removable"
      ],
      [
       "Polyester (Waterproof)",
       "",
       "",
       "",
       "images/quote/paper-polyester-waterproof"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "feel": true,
     "short": "Paper"
    },
    {
     "k": "shape",
     "label": "Cut style",
     "type": "one",
     "opts": [
      [
       "Die-Cut",
       "",
       "",
       "",
       "images/quote/shape-die-cut"
      ],
      [
       "Kiss-Cut",
       "",
       "",
       "",
       "images/quote/shape-kiss-cut"
      ],
      [
       "Circle",
       "",
       "",
       "",
       "images/quote/shape-circle"
      ],
      [
       "Oval",
       "",
       "",
       "",
       "images/quote/shape-oval"
      ],
      [
       "Square / Rect",
       "",
       "",
       "",
       "images/quote/shape-square-rect"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/quote/p-stickers-labels"
  },
  "Yard Signs": {
   "qty": [
    "5",
    "10",
    "25",
    "50"
   ],
   "questions": [
    {
     "k": "size",
     "label": "Size",
     "type": "size",
     "opts": [
      [
       "18\" × 24\"",
       "",
       "popular",
       "",
       "images/quote/size-18-24"
      ],
      [
       "24\" × 36\"",
       "",
       "",
       "",
       "images/quote/size-24-36"
      ],
      [
       "Custom Size",
       "",
       "",
       "",
       "images/quote/size-custom-size"
      ],
      [
       "Not sure — recommend for me"
      ]
     ]
    },
    {
     "k": "paper",
     "label": "Paper / material",
     "type": "paper",
     "opts": [
      [
       "4mm White Coroplast",
       "",
       "",
       "",
       "images/quote/paper-4mm-white-coroplast"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "feel": true,
     "short": "Paper"
    },
    {
     "k": "print",
     "label": "Printed on",
     "type": "one",
     "opts": [
      [
       "Single-Sided",
       "",
       "",
       "",
       "images/quote/print-single-sided"
      ],
      [
       "Double-Sided",
       "",
       "",
       "",
       "images/quote/print-double-sided"
      ]
     ],
     "short": "Printed on"
    },
    {
     "k": "layout",
     "label": "Layout",
     "type": "one",
     "opts": [
      [
       "Portrait",
       "",
       "",
       "",
       "images/quote/layout-portrait"
      ],
      [
       "Landscape",
       "",
       "",
       "",
       "images/quote/layout-landscape"
      ]
     ],
     "more": true
    },
    {
     "k": "mount",
     "label": "Mounting",
     "type": "one",
     "opts": [
      [
       "H-Stake",
       "",
       "",
       "",
       "images/quote/mount-h-stake"
      ],
      [
       "A-Frame Stand",
       "",
       "",
       "",
       "images/quote/mount-a-frame-stand"
      ],
      [
       "Post & Frame",
       "",
       "",
       "",
       "images/quote/mount-post-frame"
      ],
      [
       "Sign Only",
       "",
       "",
       "",
       "images/quote/mount-sign-only"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/quote/p-yard-signs"
  },
  "Posters": {
   "qty": [
    "25",
    "50",
    "100",
    "250",
    "500"
   ],
   "questions": [
    {
     "k": "use",
     "label": "Where will it be used?",
     "type": "one",
     "opts": [
      [
       "Indoors",
       "",
       "",
       "",
       "images/quote/use-indoors"
      ],
      [
       "Outdoors",
       "",
       "",
       "",
       "images/quote/use-outdoors"
      ],
      [
       "Event or trade show",
       "",
       "",
       "",
       "images/quote/use-event-or-trade-show"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "short": "Used"
    },
    {
     "k": "size",
     "label": "Size",
     "type": "size",
     "opts": [
      [
       "11\" × 17\" (Tabloid)",
       "",
       "popular",
       "",
       "images/quote/size-11-17-tabloid"
      ],
      [
       "12\" × 18\"",
       "",
       "",
       "",
       "images/quote/size-12-18"
      ],
      [
       "18\" × 24\"",
       "",
       "popular",
       "",
       "images/quote/size-18-24"
      ],
      [
       "24\" × 36\"",
       "",
       "",
       "",
       "images/quote/size-24-36"
      ],
      [
       "Custom Size",
       "",
       "",
       "",
       "images/quote/size-custom-size"
      ],
      [
       "Not sure — recommend for me"
      ]
     ]
    },
    {
     "k": "paper",
     "label": "Paper / material",
     "type": "paper",
     "opts": [
      [
       "80lb Gloss Text",
       "Magazine-page weight with a shiny finish",
       "",
       "",
       "images/quote/paper-80lb-gloss-text"
      ],
      [
       "80lb Silk Text",
       "Magazine-page weight, no glare",
       "",
       "",
       "images/quote/paper-80lb-silk-text"
      ],
      [
       "100lb Gloss Text",
       "Our sturdiest poster paper — glossy, vivid colors",
       "popular",
       "",
       "images/quote/paper-100lb-gloss-text"
      ],
      [
       "100lb Silk Text",
       "Our sturdiest poster paper — no glare, easy to read from an angle",
       "",
       "",
       "images/quote/paper-100lb-silk-text"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "feel": true,
     "short": "Paper"
    },
    {
     "k": "print",
     "label": "Printed on",
     "type": "one",
     "opts": [
      [
       "Single-Sided",
       "",
       "",
       "",
       "images/quote/print-single-sided"
      ],
      [
       "Double-Sided",
       "",
       "",
       "",
       "images/quote/print-double-sided"
      ]
     ],
     "short": "Printed on"
    },
    {
     "k": "layout",
     "label": "Layout",
     "type": "one",
     "opts": [
      [
       "Portrait",
       "",
       "",
       "",
       "images/quote/layout-portrait"
      ],
      [
       "Landscape",
       "",
       "",
       "",
       "images/quote/layout-landscape"
      ]
     ],
     "more": true
    },
    {
     "k": "finish",
     "label": "Finish over the paper",
     "type": "one",
     "opts": [
      [
       "No Finish",
       "Standard — no additional coating",
       "popular",
       "",
       "images/quote/finish-no-finish"
      ],
      [
       "Soft Touch Laminate",
       "Velvety, suede-like laminate film — premium tactile feel",
       "",
       "",
       "images/quote/finish-soft-touch-laminate"
      ],
      [
       "Matte Laminate",
       "Flat, non-reflective laminate film — subdued matte look",
       "",
       "",
       "images/quote/finish-matte-laminate"
      ],
      [
       "Gloss Laminate",
       "Thick, high-gloss plastic film — most durable, water/scuff resistant, good for repeated handling/display",
       "",
       "",
       "images/quote/finish-gloss-laminate"
      ],
      [
       "Gloss UV",
       "Liquid UV coating cured under light — high gloss, thinner than laminate, less scratch-resistant",
       "",
       "",
       "images/quote/finish-gloss-uv"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — lightest protective sheen, most economical",
       "",
       "",
       "images/quote/finish-aqueous-coating"
      ]
     ],
     "more": true
    },
    {
     "k": "accent",
     "label": "Special accents (coating, foil)",
     "type": "one",
     "opts": [
      [
       "No Coating",
       "Standard finish — no additional treatment",
       "popular",
       "",
       "images/quote/accent-no-coating"
      ],
      [
       "Spot UV",
       "Selective high-gloss accents over the base finish",
       "",
       "",
       "images/quote/accent-spot-uv"
      ],
      [
       "Raised Spot UV",
       "Thicker, tactile UV you can feel — 50-micron raised gloss accents",
       "",
       "",
       "images/quote/accent-raised-spot-uv"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents — flat finish",
       "",
       "",
       "images/quote/accent-foil-stamping"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option",
       "",
       "",
       "images/quote/accent-raised-foil"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/quote/p-posters"
  },
  "Booklets": {
   "qty": [
    "25",
    "50",
    "100",
    "250",
    "500"
   ],
   "questions": [
    {
     "k": "binding",
     "label": "Binding",
     "type": "one",
     "opts": [
      [
       "Saddle Stitch",
       "",
       "",
       "",
       "images/quote/binding-saddle-stitch"
      ],
      [
       "Spiral / Coil",
       "",
       "",
       "",
       "images/quote/binding-spiral-coil"
      ],
      [
       "Perfect Bind",
       "",
       "",
       "",
       "images/quote/binding-perfect-bind"
      ]
     ]
    },
    {
     "k": "size",
     "label": "Size",
     "type": "size",
     "opts": [
      [
       "4.25\" × 5.5\"",
       "",
       "",
       "",
       "images/quote/size-4-25-5-5"
      ],
      [
       "5.5\" × 8.5\"",
       "",
       "",
       "",
       "images/quote/size-5-5-8-5"
      ],
      [
       "8.5\" × 11\"",
       "",
       "popular",
       "",
       "images/quote/size-8-5-11"
      ],
      [
       "Custom Size",
       "",
       "",
       "",
       "images/quote/size-custom-size"
      ],
      [
       "Not sure — recommend for me"
      ]
     ]
    },
    {
     "k": "coverstock",
     "label": "Cover stock",
     "type": "paper",
     "opts": [
      [
       "80lb Gloss Cover",
       "",
       "",
       "",
       "images/quote/coverstock-80lb-gloss-cover"
      ],
      [
       "80lb Silk Cover",
       "",
       "",
       "",
       "images/quote/coverstock-80lb-silk-cover"
      ],
      [
       "100lb Gloss Cover",
       "",
       "",
       "",
       "images/quote/coverstock-100lb-gloss-cover"
      ],
      [
       "100lb Silk Cover",
       "",
       "",
       "",
       "images/quote/coverstock-100lb-silk-cover"
      ],
      [
       "12PT Card Stock",
       "",
       "",
       "",
       "images/quote/coverstock-12pt-card-stock"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "feel": true,
     "short": "Cover stock"
    },
    {
     "k": "insidestock",
     "label": "Inside pages stock",
     "type": "paper",
     "opts": [
      [
       "60lb Offset Text",
       "",
       "",
       "",
       "images/quote/insidestock-60lb-offset-text"
      ],
      [
       "70lb Text",
       "",
       "",
       "",
       "images/quote/insidestock-70lb-text"
      ],
      [
       "80lb Gloss Text",
       "",
       "",
       "",
       "images/quote/insidestock-80lb-gloss-text"
      ],
      [
       "80lb Silk Text",
       "",
       "",
       "",
       "images/quote/insidestock-80lb-silk-text"
      ],
      [
       "100lb Gloss Text",
       "",
       "",
       "",
       "images/quote/insidestock-100lb-gloss-text"
      ],
      [
       "100lb Silk Text",
       "",
       "",
       "",
       "images/quote/insidestock-100lb-silk-text"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "feel": true,
     "short": "Inside stock"
    },
    {
     "k": "printcover",
     "label": "Cover color and sides",
     "type": "one",
     "opts": [
      [
       "Full Color, Both Sides",
       "",
       "",
       "",
       "images/quote/printcover-full-color-both-sides"
      ],
      [
       "Full Color, Outside Only",
       "",
       "",
       "",
       "images/quote/printcover-full-color-outside-only"
      ],
      [
       "B&W, Both Sides",
       "",
       "",
       "",
       "images/quote/printcover-b-w-both-sides"
      ]
     ],
     "short": "Cover print"
    },
    {
     "k": "printinside",
     "label": "Inside pages color and sides",
     "type": "one",
     "opts": [
      [
       "Full Color, Double-Sided",
       "",
       "",
       "",
       "images/quote/printinside-full-color-double-sided"
      ],
      [
       "B&W, Double-Sided",
       "",
       "",
       "",
       "images/quote/printinside-b-w-double-sided"
      ]
     ],
     "short": "Inside print"
    },
    {
     "k": "pages",
     "label": "Inside pages (not counting the cover)",
     "type": "pages",
     "short": "Inside pages"
    },
    {
     "k": "layout",
     "label": "Layout",
     "type": "one",
     "opts": [
      [
       "Portrait",
       "",
       "",
       "",
       "images/quote/layout-portrait"
      ],
      [
       "Landscape",
       "",
       "",
       "",
       "images/quote/layout-landscape"
      ]
     ],
     "more": true
    },
    {
     "k": "finish",
     "label": "Finish over the paper",
     "type": "one",
     "opts": [
      [
       "No Finish",
       "Standard — no additional lamination",
       "popular",
       "",
       "images/quote/finish-no-finish"
      ],
      [
       "Soft Touch Laminate",
       "Velvety, suede-like laminate film — premium tactile feel",
       "",
       "",
       "images/quote/finish-soft-touch-laminate"
      ],
      [
       "Matte Laminate",
       "Flat, non-reflective laminate film — subdued matte look",
       "",
       "",
       "images/quote/finish-matte-laminate"
      ],
      [
       "Gloss Laminate",
       "Thick, high-gloss plastic film — most durable, water/scuff resistant",
       "",
       "",
       "images/quote/finish-gloss-laminate"
      ],
      [
       "Gloss UV",
       "Liquid UV coating cured under light — high gloss, thinner than laminate, less scratch-resistant",
       "",
       "",
       "images/quote/finish-gloss-uv"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — lightest protective sheen, most economical",
       "",
       "",
       "images/quote/finish-aqueous-coating"
      ]
     ],
     "more": true
    },
    {
     "k": "accent",
     "label": "Special accents (coating, foil)",
     "type": "one",
     "opts": [
      [
       "No Coating",
       "Standard finish — no additional treatment",
       "popular",
       "",
       "images/quote/accent-no-coating"
      ],
      [
       "Spot UV",
       "Selective high-gloss accents over the base finish",
       "",
       "",
       "images/quote/accent-spot-uv"
      ],
      [
       "Raised Spot UV",
       "Thicker, tactile UV you can feel — 50-micron raised gloss accents",
       "",
       "",
       "images/quote/accent-raised-spot-uv"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents — flat finish",
       "",
       "",
       "images/quote/accent-foil-stamping"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option",
       "",
       "",
       "images/quote/accent-raised-foil"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/quote/p-booklets"
  },
  "Presentation Folders": {
   "qty": [
    "25",
    "50",
    "100",
    "250",
    "500"
   ],
   "questions": [
    {
     "k": "size",
     "label": "Size",
     "type": "size",
     "opts": [
      [
       "9\" × 12\" (Standard)",
       "",
       "popular",
       "",
       "images/quote/size-9-12-standard"
      ],
      [
       "9\" × 14.5\" (Legal)",
       "",
       "",
       "",
       "images/quote/size-9-14-5-legal"
      ],
      [
       "6\" × 9\" (Half Size)",
       "",
       "",
       "",
       "images/quote/size-6-9-half-size"
      ],
      [
       "Custom Size",
       "",
       "",
       "",
       "images/quote/size-custom-size"
      ],
      [
       "Not sure — recommend for me"
      ]
     ]
    },
    {
     "k": "paper",
     "label": "Paper / material",
     "type": "paper",
     "opts": [
      [
       "100lb Gloss Cover",
       "Thinner than 14PT — still holds its shape",
       "",
       "",
       "images/quote/paper-100lb-gloss-cover"
      ],
      [
       "14PT Gloss",
       "Standard sturdy card stock, glossy finish",
       "popular",
       "",
       "images/quote/paper-14pt-gloss"
      ],
      [
       "14PT Silk",
       "Standard sturdy card stock, smooth satin finish, no glare",
       "",
       "",
       "images/quote/paper-14pt-silk"
      ],
      [
       "16PT Gloss Cover",
       "Extra-thick, glossy finish",
       "",
       "",
       "images/quote/paper-16pt-gloss-cover"
      ],
      [
       "16PT Silk",
       "Extra-thick, smooth satin finish",
       "popular",
       "",
       "images/quote/paper-16pt-silk"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "feel": true,
     "short": "Paper"
    },
    {
     "k": "print",
     "label": "Color and sides",
     "type": "one",
     "opts": [
      [
       "Full Color, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-double-sided"
      ],
      [
       "Full Color, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-single-sided"
      ],
      [
       "Color Front / B&W Back",
       "",
       "",
       "",
       "images/quote/print-color-front-b-w-back"
      ],
      [
       "B&W, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-double-sided"
      ],
      [
       "B&W, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-single-sided"
      ]
     ],
     "short": "Print"
    },
    {
     "k": "finish",
     "label": "Finish over the paper",
     "type": "one",
     "opts": [
      [
       "No Finish",
       "Standard — no additional coating",
       "popular",
       "",
       "images/quote/finish-no-finish"
      ],
      [
       "Soft Touch Laminate",
       "Velvety, suede-like laminate film — premium tactile feel",
       "",
       "",
       "images/quote/finish-soft-touch-laminate"
      ],
      [
       "Matte Laminate",
       "Flat, non-reflective laminate film — subdued matte look",
       "",
       "",
       "images/quote/finish-matte-laminate"
      ],
      [
       "Gloss Laminate",
       "Thick, high-gloss plastic film — most durable, water/scuff resistant",
       "",
       "",
       "images/quote/finish-gloss-laminate"
      ],
      [
       "Gloss UV",
       "Liquid UV coating cured under light — high gloss, thinner than laminate, less scratch-resistant",
       "",
       "",
       "images/quote/finish-gloss-uv"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — lightest protective sheen, most economical",
       "",
       "",
       "images/quote/finish-aqueous-coating"
      ]
     ],
     "more": true
    },
    {
     "k": "accent",
     "label": "Special accents (coating, foil)",
     "type": "one",
     "opts": [
      [
       "No Coating",
       "Standard finish — no additional treatment",
       "popular",
       "",
       "images/quote/accent-no-coating"
      ],
      [
       "Spot UV",
       "Selective high-gloss accents over the base finish",
       "",
       "",
       "images/quote/accent-spot-uv"
      ],
      [
       "Raised Spot UV",
       "Thicker, tactile UV you can feel — 50-micron raised gloss accents",
       "",
       "",
       "images/quote/accent-raised-spot-uv"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents — flat finish",
       "",
       "",
       "images/quote/accent-foil-stamping"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option",
       "",
       "",
       "images/quote/accent-raised-foil"
      ]
     ],
     "more": true
    },
    {
     "k": "pocket",
     "label": "Pocket configuration",
     "type": "one",
     "opts": [
      [
       "Two Pockets",
       "",
       "",
       "",
       "images/quote/pocket-two-pockets"
      ],
      [
       "One Pocket (Right)",
       "",
       "",
       "",
       "images/quote/pocket-one-pocket-right"
      ],
      [
       "One Pocket (Left)",
       "",
       "",
       "",
       "images/quote/pocket-one-pocket-left"
      ],
      [
       "No Pocket",
       "",
       "",
       "",
       "images/quote/pocket-no-pocket"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/quote/p-presentation-folders"
  },
  "Letterhead": {
   "qty": [
    "250",
    "500",
    "1,000",
    "2,500"
   ],
   "questions": [
    {
     "k": "size",
     "label": "Size",
     "type": "size",
     "opts": [
      [
       "8.5\" × 11\"",
       "",
       "",
       "",
       "images/quote/size-8-5-11"
      ],
      [
       "5.5\" × 8.5\"",
       "",
       "",
       "",
       "images/quote/size-5-5-8-5"
      ],
      [
       "Not sure — recommend for me"
      ]
     ]
    },
    {
     "k": "paper",
     "label": "Paper / material",
     "type": "paper",
     "opts": [
      [
       "24lb Bond White",
       "Standard copy-paper weight — everyday business printing",
       "popular",
       "",
       "images/quote/paper-24lb-bond-white"
      ],
      [
       "24lb Laid White",
       "Textured, formal feel — classic stationery texture",
       "",
       "",
       "images/quote/paper-24lb-laid-white"
      ],
      [
       "28lb Linen Bright White",
       "Textured linen finish — upscale, formal look",
       "",
       "",
       "images/quote/paper-28lb-linen-bright-white"
      ],
      [
       "32lb Premium Bond",
       "Noticeably heavier than standard bond — premium feel",
       "popular",
       "",
       "images/quote/paper-32lb-premium-bond"
      ],
      [
       "60lb Offset White",
       "Lightweight, economical option",
       "",
       "",
       "images/quote/paper-60lb-offset-white"
      ],
      [
       "70lb Text White",
       "Slightly heavier than standard bond",
       "",
       "",
       "images/quote/paper-70lb-text-white"
      ],
      [
       "80lb Text White",
       "Sturdiest text-weight option",
       "",
       "",
       "images/quote/paper-80lb-text-white"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "feel": true,
     "short": "Paper"
    },
    {
     "k": "print",
     "label": "Color and sides",
     "type": "one",
     "opts": [
      [
       "Full Color, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-double-sided"
      ],
      [
       "Full Color, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-single-sided"
      ],
      [
       "Color Front / B&W Back",
       "",
       "",
       "",
       "images/quote/print-color-front-b-w-back"
      ],
      [
       "B&W, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-double-sided"
      ],
      [
       "B&W, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-single-sided"
      ]
     ],
     "short": "Print"
    },
    {
     "k": "finish",
     "label": "Finish over the paper",
     "type": "one",
     "opts": [
      [
       "No Finish",
       "Standard — uncoated, easiest to write/print on",
       "popular",
       "",
       "images/quote/finish-no-finish"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — light protective sheen, resists fingerprints/light moisture",
       "",
       "",
       "images/quote/finish-aqueous-coating"
      ]
     ],
     "more": true
    },
    {
     "k": "accent",
     "label": "Special accents (coating, foil)",
     "type": "one",
     "opts": [
      [
       "No Coating",
       "Standard — no additional treatment",
       "popular",
       "",
       "images/quote/accent-no-coating"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents on logo/border — flat finish",
       "",
       "",
       "images/quote/accent-foil-stamping"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option",
       "",
       "",
       "images/quote/accent-raised-foil"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/quote/p-letterhead"
  },
  "Envelopes": {
   "qty": [
    "250",
    "500",
    "1,000",
    "2,500",
    "5,000"
   ],
   "questions": [
    {
     "k": "size",
     "label": "Size",
     "type": "size",
     "opts": [
      [
       "#10 (9.5\" × 4.125\")",
       "",
       "popular",
       "",
       "images/quote/size-10-9-5-4-125"
      ],
      [
       "#9 (8.875\" × 3.875\")",
       "",
       "",
       "",
       "images/quote/size-9-8-875-3-875"
      ],
      [
       "A2 (4.375\" × 5.75\")",
       "",
       "",
       "",
       "images/quote/size-a2-4-375-5-75"
      ],
      [
       "A7 (5.25\" × 7.25\")",
       "",
       "",
       "",
       "images/quote/size-a7-5-25-7-25"
      ],
      [
       "4\" × 6\"",
       "",
       "",
       "",
       "images/quote/size-4-6"
      ],
      [
       "5\" × 7\"",
       "",
       "",
       "",
       "images/quote/size-5-7"
      ],
      [
       "6\" × 9\"",
       "",
       "",
       "",
       "images/quote/size-6-9"
      ],
      [
       "9\" × 12\"",
       "",
       "",
       "",
       "images/quote/size-9-12"
      ],
      [
       "Custom Size",
       "",
       "",
       "",
       "images/quote/size-custom-size"
      ],
      [
       "Not sure — recommend for me"
      ]
     ]
    },
    {
     "k": "paper",
     "label": "Paper / material",
     "type": "paper",
     "opts": [
      [
       "24lb Bond White",
       "Standard envelope weight — everyday business mail",
       "popular",
       "",
       "images/quote/paper-24lb-bond-white"
      ],
      [
       "60lb Offset White",
       "Lightweight, economical option",
       "",
       "",
       "images/quote/paper-60lb-offset-white"
      ],
      [
       "70lb Text White",
       "Slightly heavier — sturdier feel",
       "",
       "",
       "images/quote/paper-70lb-text-white"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "feel": true,
     "short": "Paper"
    },
    {
     "k": "print",
     "label": "Color and sides",
     "type": "one",
     "opts": [
      [
       "Full Color, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-double-sided"
      ],
      [
       "Full Color, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-single-sided"
      ],
      [
       "Color Front / B&W Back",
       "",
       "",
       "",
       "images/quote/print-color-front-b-w-back"
      ],
      [
       "B&W, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-double-sided"
      ],
      [
       "B&W, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-single-sided"
      ]
     ],
     "short": "Print"
    },
    {
     "k": "envstyle",
     "label": "Envelope style",
     "type": "one",
     "opts": [
      [
       "Blank",
       "",
       "",
       "",
       "images/quote/envstyle-blank"
      ],
      [
       "Window",
       "",
       "",
       "",
       "images/quote/envstyle-window"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/quote/p-envelopes"
  },
  "Remittance Envelopes": {
   "qty": [
    "250",
    "500",
    "1,000",
    "2,500",
    "5,000"
   ],
   "questions": [
    {
     "k": "size",
     "label": "Size",
     "type": "size",
     "opts": [
      [
       "6.5\" × 3.625\" (#6¾)",
       "",
       "popular",
       "",
       "images/quote/size-6-5-3-625-6"
      ],
      [
       "8.875\" × 3.875\" (#9)",
       "",
       "",
       "",
       "images/quote/size-8-875-3-875-9"
      ],
      [
       "Not sure — recommend for me"
      ]
     ]
    },
    {
     "k": "paper",
     "label": "Paper / material",
     "type": "paper",
     "opts": [
      [
       "24lb White Wove Uncoated",
       "Standard remittance envelope weight — smooth uncoated finish, easy to write on",
       "popular",
       "",
       "images/quote/paper-24lb-white-wove-uncoated"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "feel": true,
     "short": "Paper"
    },
    {
     "k": "print",
     "label": "Color and sides",
     "type": "one",
     "opts": [
      [
       "Full Color, Both Sides",
       "",
       "",
       "",
       "images/quote/print-full-color-both-sides"
      ],
      [
       "Full Color, Front Only",
       "",
       "",
       "",
       "images/quote/print-full-color-front-only"
      ],
      [
       "Full Color, Back Only",
       "",
       "",
       "",
       "images/quote/print-full-color-back-only"
      ]
     ],
     "short": "Print"
    },
    {
     "k": "flap",
     "label": "Flap style",
     "type": "one",
     "opts": [
      [
       "Short Flap",
       "",
       "",
       "",
       "images/quote/flap-short-flap"
      ],
      [
       "Long Flap",
       "",
       "",
       "",
       "images/quote/flap-long-flap"
      ]
     ],
     "more": true
    },
    {
     "k": "shrink",
     "label": "Shrink wrapping",
     "type": "one",
     "opts": [
      [
       "No Shrink Wrapping",
       "",
       "",
       "",
       "images/quote/shrink-no-shrink-wrapping"
      ],
      [
       "Shrink Wrap 50 Per Package",
       "",
       "",
       "",
       "images/quote/shrink-shrink-wrap-50-per-package"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/quote/p-remittance-envelopes"
  },
  "Notepads": {
   "qty": [
    "25",
    "50",
    "100",
    "250",
    "500",
    "1,000"
   ],
   "questions": [
    {
     "k": "size",
     "label": "Size",
     "type": "size",
     "opts": [
      [
       "3.5\" × 8.5\"",
       "",
       "",
       "",
       "images/quote/size-3-5-8-5"
      ],
      [
       "4.25\" × 5.5\" (Half Letter)",
       "",
       "popular",
       "",
       "images/quote/size-4-25-5-5-half-letter"
      ],
      [
       "5.5\" × 8.5\" (Half Letter tall)",
       "",
       "popular",
       "",
       "images/quote/size-5-5-8-5-half-letter-tall"
      ],
      [
       "8.5\" × 11\" (Letter)",
       "",
       "",
       "",
       "images/quote/size-8-5-11-letter"
      ],
      [
       "Custom Size",
       "",
       "",
       "",
       "images/quote/size-custom-size"
      ],
      [
       "Not sure — recommend for me"
      ]
     ]
    },
    {
     "k": "paper",
     "label": "Paper / material",
     "type": "paper",
     "opts": [
      [
       "60lb Offset Text",
       "Lightweight, like notebook paper — smooth writing surface",
       "popular",
       "",
       "images/quote/paper-60lb-offset-text"
      ],
      [
       "70lb Text",
       "Slightly heavier — less see-through when writing",
       "",
       "",
       "images/quote/paper-70lb-text"
      ],
      [
       "80lb Text",
       "Sturdiest option — minimal show-through, premium feel",
       "",
       "",
       "images/quote/paper-80lb-text"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "feel": true,
     "short": "Paper"
    },
    {
     "k": "print",
     "label": "Color and sides",
     "type": "one",
     "opts": [
      [
       "Full Color, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-double-sided"
      ],
      [
       "Full Color, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-single-sided"
      ],
      [
       "Color Front / B&W Back",
       "",
       "",
       "",
       "images/quote/print-color-front-b-w-back"
      ],
      [
       "B&W, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-double-sided"
      ],
      [
       "B&W, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-single-sided"
      ]
     ],
     "short": "Print"
    },
    {
     "k": "layout",
     "label": "Layout",
     "type": "one",
     "opts": [
      [
       "Portrait",
       "",
       "",
       "",
       "images/quote/layout-portrait"
      ],
      [
       "Landscape",
       "",
       "",
       "",
       "images/quote/layout-landscape"
      ]
     ],
     "more": true
    },
    {
     "k": "sheets",
     "label": "Sheets per pad",
     "type": "one",
     "opts": [
      [
       "25 Sheets",
       "",
       "",
       "",
       "images/quote/sheets-25-sheets"
      ],
      [
       "50 Sheets",
       "",
       "",
       "",
       "images/quote/sheets-50-sheets"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/quote/p-notepads"
  },
  "Invoice Books": {
   "qty": [
    "25",
    "50",
    "100",
    "250"
   ],
   "questions": [
    {
     "k": "size",
     "label": "Size",
     "type": "size",
     "opts": [
      [
       "4.25\" × 5.5\"",
       "",
       "",
       "",
       "images/quote/size-4-25-5-5"
      ],
      [
       "5.5\" × 8.5\"",
       "",
       "popular",
       "",
       "images/quote/size-5-5-8-5"
      ],
      [
       "8.5\" × 11\"",
       "",
       "",
       "",
       "images/quote/size-8-5-11"
      ],
      [
       "Custom Size",
       "",
       "",
       "",
       "images/quote/size-custom-size"
      ],
      [
       "Not sure — recommend for me"
      ]
     ]
    },
    {
     "k": "paper",
     "label": "Paper / material",
     "type": "paper",
     "opts": [
      [
       "NCR 2-Part (White / Canary)",
       "",
       "popular",
       "",
       "images/quote/paper-ncr-2-part-white-canary"
      ],
      [
       "NCR 3-Part (White / Canary / Pink)",
       "",
       "",
       "",
       "images/quote/paper-ncr-3-part-white-canary-pink"
      ],
      [
       "NCR 4-Part (White / Canary / Pink / Goldenrod)",
       "",
       "",
       "",
       "images/quote/paper-ncr-4-part-white-canary-pink-goldenrod"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "feel": true,
     "short": "Paper"
    },
    {
     "k": "print",
     "label": "Color and sides",
     "type": "one",
     "opts": [
      [
       "Full Color, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-double-sided"
      ],
      [
       "Full Color, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-full-color-single-sided"
      ],
      [
       "Color Front / B&W Back",
       "",
       "",
       "",
       "images/quote/print-color-front-b-w-back"
      ],
      [
       "B&W, Double-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-double-sided"
      ],
      [
       "B&W, Single-Sided",
       "",
       "",
       "",
       "images/quote/print-b-w-single-sided"
      ]
     ],
     "short": "Print"
    },
    {
     "k": "numbering",
     "label": "Numbering",
     "type": "one",
     "opts": [
      [
       "No Numbering",
       "",
       "",
       "",
       "images/quote/numbering-no-numbering"
      ],
      [
       "Sequential Numbering",
       "",
       "",
       "",
       "images/quote/numbering-sequential-numbering"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/quote/p-invoice-books"
  },
  "Banners": {
   "qty": [
    "1",
    "2",
    "3",
    "4",
    "5",
    "10",
    "25"
   ],
   "questions": [
    {
     "k": "use",
     "label": "Where will it be used?",
     "type": "one",
     "opts": [
      [
       "Indoors",
       "",
       "",
       "",
       "images/quote/use-indoors"
      ],
      [
       "Outdoors",
       "",
       "",
       "",
       "images/quote/use-outdoors"
      ],
      [
       "Event or trade show",
       "",
       "",
       "",
       "images/quote/use-event-or-trade-show"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "short": "Used"
    },
    {
     "k": "material",
     "label": "Material",
     "type": "paper",
     "opts": [
      [
       "13oz Vinyl Banner",
       "Indoor and outdoor; waterproof and UV safe.",
       "Popular",
       "",
       "images/quote/13oz-vinyl-banner"
      ],
      [
       "18oz Blockout Vinyl Banner",
       "Indoor and outdoor. A blockout layer allows printing on both sides; often used for street and light-pole banners.",
       "",
       "",
       "images/quote/18oz-blockout-vinyl-banner"
      ],
      [
       "Backlit Banner",
       "Made for light boxes; best at night with the light on.",
       "",
       "",
       "images/quote/backlit-banner"
      ],
      [
       "Mesh Banner",
       "Indoor and outdoor; lets wind pass through.",
       "",
       "",
       "images/quote/mesh-banner"
      ],
      [
       "Indoor Banner (smooth)",
       "Single-sided, smooth finish for close-up indoor use; also holds up outdoors.",
       "",
       "",
       "images/quote/indoor-banner-smooth"
      ],
      [
       "Pole Banner Set",
       "Double-sided 18oz blockout vinyl with pole pockets and four corner grommets; hardware optional.",
       "",
       "",
       "images/quote/pole-banner-set"
      ],
      [
       "9oz Fabric Banner (wrinkle-free)",
       "Single-sided dye-sublimated polyester; indoor.",
       "",
       "",
       "images/quote/9oz-fabric-banner-wrinkle-free"
      ],
      [
       "Blockout Fabric Banner (9.5oz)",
       "Blockout fabric banner.",
       "",
       "",
       "images/quote/blockout-fabric-banner-9-5oz"
      ],
      [
       "Tension Fabric",
       "Single-sided, 2-way stretch polyester.",
       "",
       "",
       "images/quote/tension-fabric"
      ],
      [
       "Hand Banner (set of 10)",
       "13oz matte vinyl, 9.5 in tall, single-sided; with or without hardware.",
       "",
       "",
       "images/quote/hand-banner-set-of-10"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "short": "Material",
     "feel": false
    },
    {
     "k": "size",
     "label": "Size (width × height)",
     "type": "line",
     "ph": "e.g. 3 × 6 ft, or 36 × 72 in",
     "short": "Size"
    },
    {
     "k": "sides",
     "label": "Printed on",
     "type": "one",
     "opts": [
      [
       "Single-sided",
       "",
       "",
       "",
       "images/quote/sides-single-sided"
      ],
      [
       "Double-sided",
       "Fabric, tension, indoor and hand banners are single-sided only.",
       "",
       "",
       "images/quote/sides-double-sided"
      ]
     ],
     "short": "Printed on"
    },
    {
     "k": "finishing",
     "label": "Finishing",
     "type": "multi",
     "opts": [
      [
       "Hems + grommets (standard)",
       "",
       "",
       "",
       "images/quote/hems-grommets-standard"
      ],
      [
       "Hems only",
       "",
       "",
       "",
       "images/quote/hems-only"
      ],
      [
       "Pole pocket (2\", 3\" or 4\")",
       "",
       "",
       "",
       "images/quote/pole-pocket-2-3-or-4"
      ],
      [
       "Sewn-in rope (3/16\" or 5/16\")",
       "",
       "",
       "",
       "images/quote/sewn-in-rope-3-16-or-5-16"
      ],
      [
       "Windslits",
       "",
       "",
       "",
       "images/quote/windslits"
      ],
      [
       "Reinforced corners (banner tabs)",
       "",
       "",
       "",
       "images/quote/reinforced-corners-banner-tabs"
      ],
      [
       "Velcro (single-sided only)",
       "",
       "",
       "",
       "images/quote/velcro-single-sided-only"
      ],
      [
       "Webbing and D-rings",
       "",
       "",
       "",
       "images/quote/webbing-and-d-rings"
      ],
      [
       "Heat-knife cut edge, no hem (fabric)",
       "",
       "",
       "",
       "images/quote/heat-knife-cut-edge-no-hem-fabric"
      ],
      [
       "No finishing",
       "",
       "",
       "",
       "images/quote/no-finishing"
      ]
     ],
     "short": "Finishing"
    },
    {
     "k": "hardware",
     "label": "Hardware (pole and hand banners)",
     "type": "one",
     "opts": [
      [
       "Banner + hardware",
       "",
       "",
       "",
       "images/quote/hardware-banner-hardware"
      ],
      [
       "Banner only",
       "",
       "",
       "",
       "images/quote/hardware-banner-only"
      ],
      [
       "Hardware only",
       "",
       "",
       "",
       "images/quote/hardware-hardware-only"
      ]
     ],
     "more": true,
     "short": "Hardware"
    }
   ],
   "img": "images/quote/p-banners"
  },
  "Rigid Signs & Magnets": {
   "qty": [
    "1",
    "2",
    "3",
    "5",
    "10",
    "25",
    "50"
   ],
   "questions": [
    {
     "k": "use",
     "label": "Where will it be used?",
     "type": "one",
     "opts": [
      [
       "Indoors",
       "",
       "",
       "",
       "images/quote/use-indoors"
      ],
      [
       "Outdoors",
       "",
       "",
       "",
       "images/quote/use-outdoors"
      ],
      [
       "Event or trade show",
       "",
       "",
       "",
       "images/quote/use-event-or-trade-show"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "short": "Used"
    },
    {
     "k": "material",
     "label": "Material",
     "type": "paper",
     "opts": [
      [
       "Coroplast (4mm)",
       "Corrugated plastic; indoor and outdoor; the usual yard-sign material.",
       "Popular",
       "",
       "images/quote/coroplast-4mm"
      ],
      [
       "PVC Board (1/8\")",
       "Water-resistant; indoor and outdoor.",
       "",
       "",
       "images/quote/pvc-board-1-8"
      ],
      [
       "Foam Board (3/16\")",
       "Indoor only; not waterproof.",
       "",
       "indoor",
       "images/quote/foam-board-3-16"
      ],
      [
       "Styrene (.020\")",
       "Thin white polystyrene sheet; indoor and outdoor; single-sided.",
       "",
       "",
       "images/quote/styrene-020"
      ],
      [
       "Metal Sign (16 gauge steel)",
       "Powder-coated; indoor and outdoor.",
       "",
       "",
       "images/quote/metal-sign-16-gauge-steel"
      ],
      [
       "Magnet (30 mil)",
       "Printed on one side only; indoor and outdoor; waterproof and UV safe.",
       "",
       "",
       "images/quote/magnet-30-mil"
      ],
      [
       "Reflective Coroplast",
       "4mm coroplast with reflective vinyl; medium-term outdoor use.",
       "",
       "",
       "images/quote/reflective-coroplast"
      ],
      [
       "Reflective PVC Board",
       "",
       "",
       "",
       "images/quote/reflective-pvc-board"
      ],
      [
       "Reflective Aluminum Sign",
       "",
       "",
       "",
       "images/quote/reflective-aluminum-sign"
      ],
      [
       "Dry-Erase Coroplast",
       "4mm coroplast with a dry-erase coating.",
       "",
       "",
       "images/quote/dry-erase-coroplast"
      ],
      [
       "Dry-Erase Magnet",
       "",
       "",
       "",
       "images/quote/dry-erase-magnet"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "short": "Material",
     "feel": false
    },
    {
     "k": "size",
     "label": "Size (width × height)",
     "type": "line",
     "ph": "e.g. 24 × 36 in",
     "short": "Size"
    },
    {
     "k": "sides",
     "label": "Printed on",
     "type": "one",
     "opts": [
      [
       "Single-sided",
       "",
       "",
       "",
       "images/quote/sides-single-sided"
      ],
      [
       "Double-sided",
       "Not for styrene or magnets (one side only).",
       "",
       "",
       "images/quote/sides-double-sided"
      ]
     ],
     "short": "Printed on"
    },
    {
     "k": "addons",
     "label": "Add-ons",
     "type": "multi",
     "opts": [
      [
       "Grommets",
       "",
       "",
       "",
       "images/quote/grommets"
      ],
      [
       "H-stake (steel)",
       "H-stakes are for coroplast yard signs.",
       "",
       "",
       "images/quote/h-stake-steel"
      ],
      [
       "None",
       "",
       "",
       "",
       "images/quote/none"
      ]
     ],
     "short": "Add-ons"
    }
   ],
   "img": "images/quote/p-rigid-signs-magnets"
  },
  "Window, Wall & Floor Graphics": {
   "qty": [
    "1",
    "2",
    "5",
    "10",
    "25"
   ],
   "questions": [
    {
     "k": "use",
     "label": "Where will it be used?",
     "type": "one",
     "opts": [
      [
       "Indoors",
       "",
       "",
       "",
       "images/quote/use-indoors"
      ],
      [
       "Outdoors",
       "",
       "",
       "",
       "images/quote/use-outdoors"
      ],
      [
       "Event or trade show",
       "",
       "",
       "",
       "images/quote/use-event-or-trade-show"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "short": "Used"
    },
    {
     "k": "material",
     "label": "Material",
     "type": "paper",
     "opts": [
      [
       "Premium Window Cling",
       "8 mil film with low-tack adhesive; single-sided; indoor or outdoor.",
       "Popular",
       "",
       "images/quote/premium-window-cling"
      ],
      [
       "Adhesive Window Perf",
       "70/30 perforated film: graphic on one side, clear view from the other; indoor or outdoor.",
       "",
       "",
       "images/quote/adhesive-window-perf"
      ],
      [
       "Adhesive Vinyl (high performance)",
       "3 mil film; removable; use on clean, flat, smooth surfaces only.",
       "",
       "",
       "images/quote/adhesive-vinyl-high-performance"
      ],
      [
       "Adhesive Clear Vinyl",
       "4 mil clear film with permanent adhesive.",
       "",
       "",
       "images/quote/adhesive-clear-vinyl"
      ],
      [
       "Adhesive Translucent Vinyl",
       "",
       "",
       "",
       "images/quote/adhesive-translucent-vinyl"
      ],
      [
       "Adhesive Wall Fabric",
       "6.5 mil fabric-style film; repositionable; for wall murals and temporary wall decals.",
       "",
       "",
       "images/quote/adhesive-wall-fabric"
      ],
      [
       "Floor Graphics",
       "Textured slip-resistant laminate; indoor only.",
       "",
       "indoor",
       "images/quote/floor-graphics"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "short": "Material",
     "feel": false
    },
    {
     "k": "size",
     "label": "Size (width × height)",
     "type": "line",
     "ph": "e.g. 36 × 48 in",
     "short": "Size"
    }
   ],
   "img": "images/quote/p-window-wall-floor-graphics"
  },
  "Canvas & Wall Art": {
   "qty": [
    "1",
    "2",
    "5",
    "10"
   ],
   "questions": [
    {
     "k": "material",
     "label": "Material",
     "type": "paper",
     "opts": [
      [
       "Canvas Roll",
       "15 mil semi-gloss artist canvas; ships rolled and unstretched; indoor.",
       "",
       "",
       "images/quote/canvas-roll"
      ],
      [
       "Acrylic Print",
       "",
       "",
       "",
       "images/quote/acrylic-print"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "short": "Material",
     "feel": false
    },
    {
     "k": "size",
     "label": "Size (width × height)",
     "type": "line",
     "ph": "e.g. 24 × 36 in",
     "short": "Size"
    }
   ],
   "img": "images/quote/p-canvas-wall-art"
  },
  "Flags": {
   "qty": [
    "1",
    "2",
    "3",
    "5",
    "10"
   ],
   "questions": [
    {
     "k": "style",
     "label": "Style",
     "type": "one",
     "opts": [
      [
       "Feather",
       "",
       "",
       "",
       "images/quote/feather"
      ],
      [
       "Teardrop",
       "",
       "",
       "",
       "images/quote/teardrop"
      ],
      [
       "Pole flag",
       "",
       "",
       "",
       "images/quote/pole-flag"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "short": "Style"
    },
    {
     "k": "size",
     "label": "Size",
     "type": "line",
     "ph": "e.g. 10 ft tall",
     "short": "Size"
    },
    {
     "k": "sides",
     "label": "Printed on",
     "type": "one",
     "opts": [
      [
       "Single-sided",
       "",
       "",
       "",
       "images/quote/sides-single-sided"
      ],
      [
       "Double-sided",
       "",
       "",
       "",
       "images/quote/sides-double-sided"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "short": "Printed on"
    },
    {
     "k": "hardware",
     "label": "Hardware",
     "type": "one",
     "opts": [
      [
       "Flag + hardware",
       "",
       "",
       "",
       "images/quote/hardware-flag-hardware"
      ],
      [
       "Flag only",
       "",
       "",
       "",
       "images/quote/hardware-flag-only"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "short": "Hardware"
    }
   ],
   "img": "images/quote/p-flags"
  },
  "Banner Stands": {
   "qty": [
    "1",
    "2",
    "3",
    "5",
    "10"
   ],
   "questions": [
    {
     "k": "type",
     "label": "Type of stand",
     "type": "one",
     "opts": [
      [
       "Retractable banner stand",
       "Roll-up stand: the printed banner pulls up from the base.",
       "Popular",
       "",
       "images/quote/retractable-banner-stand"
      ],
      [
       "Another kind of stand (tell us below)",
       "",
       "",
       "",
       "images/quote/another-kind-of-stand-tell-us-below"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "short": "Stand"
    },
    {
     "k": "size",
     "label": "Size",
     "type": "line",
     "ph": "e.g. 33 × 80 in",
     "short": "Size"
    },
    {
     "k": "describe",
     "label": "Tell us about the stand you have in mind",
     "type": "text",
     "short": "Details"
    }
   ],
   "img": "images/quote/p-banner-stands"
  },
  "Tents": {
   "qty": [
    "1",
    "2",
    "3"
   ],
   "questions": [
    {
     "k": "size",
     "label": "Size",
     "type": "size",
     "opts": [
      [
       "10 × 10 ft",
       "",
       "",
       "",
       "images/quote/size-10-10-ft"
      ],
      [
       "10 × 15 ft",
       "",
       "",
       "",
       "images/quote/size-10-15-ft"
      ],
      [
       "10 × 20 ft",
       "",
       "",
       "",
       "images/quote/size-10-20-ft"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "short": "Size"
    },
    {
     "k": "describe",
     "label": "Print and frame details (full wall, half wall, canopy only…)",
     "type": "text",
     "short": "Details"
    }
   ],
   "img": "images/quote/p-tents"
  },
  "Table Throws": {
   "qty": [
    "1",
    "2",
    "3",
    "5",
    "10"
   ],
   "questions": [
    {
     "k": "size",
     "label": "Table size",
     "type": "line",
     "ph": "e.g. 6 ft table",
     "short": "Size"
    },
    {
     "k": "describe",
     "label": "Anything else? (8.8 oz polyester, full-color dye sublimation)",
     "type": "text",
     "short": "Details"
    }
   ],
   "img": "images/quote/p-table-throws"
  },
  "Popup & Backlit Film": {
   "qty": [
    "1",
    "2",
    "5",
    "10",
    "25"
   ],
   "questions": [
    {
     "k": "use",
     "label": "Where will it be used?",
     "type": "one",
     "opts": [
      [
       "Indoors",
       "",
       "",
       "",
       "images/quote/use-indoors"
      ],
      [
       "Outdoors",
       "",
       "",
       "",
       "images/quote/use-outdoors"
      ],
      [
       "Event or trade show",
       "",
       "",
       "",
       "images/quote/use-event-or-trade-show"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "short": "Used"
    },
    {
     "k": "material",
     "label": "Material",
     "type": "paper",
     "opts": [
      [
       "Popup (14 mil double white)",
       "Non-adhesive, matte, single-sided; smooth for close-up indoor use and holds up outdoors.",
       "",
       "",
       "images/quote/popup-14-mil-double-white"
      ],
      [
       "Backlit Film",
       "For light boxes and backlit displays.",
       "",
       "",
       "images/quote/backlit-film"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "short": "Material",
     "feel": false
    },
    {
     "k": "size",
     "label": "Size (width × height)",
     "type": "line",
     "ph": "e.g. 36 × 48 in",
     "short": "Size"
    }
   ],
   "img": "images/quote/p-popup-backlit-film"
  },
  "Hardware Only": {
   "qty": [
    "1",
    "2",
    "3",
    "5",
    "10"
   ],
   "questions": [
    {
     "k": "describe",
     "label": "Which hardware? (stands, poles, frames, bases…)",
     "type": "text",
     "short": "Hardware"
    }
   ],
   "img": "images/quote/p-hardware-only"
  },
  "Step & Repeat Backdrops": {
   "qty": [
    "1",
    "2",
    "3",
    "5",
    "10"
   ],
   "questions": [
    {
     "k": "size",
     "label": "Size",
     "type": "line",
     "ph": "e.g. 8 × 8 ft",
     "short": "Size"
    },
    {
     "k": "describe",
     "label": "Size and stand details",
     "type": "text",
     "short": "Details"
    }
   ],
   "img": "images/quote/p-step-repeat-backdrops"
  },
  "A-Frames & Sign Holders": {
   "qty": [
    "1",
    "2",
    "3",
    "5",
    "10"
   ],
   "questions": [
    {
     "k": "size",
     "label": "Size",
     "type": "line",
     "ph": "e.g. 8 × 8 ft",
     "short": "Size"
    },
    {
     "k": "describe",
     "label": "What kind of A-frame or sign holder?",
     "type": "text",
     "short": "Details"
    }
   ],
   "img": "images/quote/p-a-frames-sign-holders"
  },
  "Real Estate Signs": {
   "qty": [
    "1",
    "2",
    "3",
    "5",
    "10"
   ],
   "questions": [
    {
     "k": "size",
     "label": "Size",
     "type": "line",
     "ph": "e.g. 8 × 8 ft",
     "short": "Size"
    },
    {
     "k": "describe",
     "label": "What do you need? (sign, rider, frame…)",
     "type": "text",
     "short": "Details"
    }
   ],
   "img": "images/quote/p-real-estate-signs"
  },
  "Trade Show Displays": {
   "qty": [
    "1",
    "2",
    "3",
    "5",
    "10"
   ],
   "questions": [
    {
     "k": "size",
     "label": "Size",
     "type": "line",
     "ph": "e.g. 8 × 8 ft",
     "short": "Size"
    },
    {
     "k": "describe",
     "label": "What do you have in mind?",
     "type": "text",
     "short": "Details"
    }
   ],
   "img": "images/quote/p-trade-show-displays"
  }
 }
};
