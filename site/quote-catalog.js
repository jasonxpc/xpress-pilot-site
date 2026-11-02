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
   ]
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
       "Exactly the same"
      ],
      [
       "Same, with small changes"
      ]
     ]
    }
   ]
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
     "Full Color, Double-Sided"
    ],
    [
     "Full Color, Single-Sided"
    ],
    [
     "Color Front / B&W Back"
    ],
    [
     "B&W, Double-Sided"
    ],
    [
     "B&W, Single-Sided"
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
       "3.5\" × 8.5\" (Rack Card)"
      ],
      [
       "4\" × 6\""
      ],
      [
       "4.25\" × 5.5\" (Half Letter)"
      ],
      [
       "5.5\" × 8.5\" (Half Letter)",
       "",
       "popular"
      ],
      [
       "8.5\" × 11\" (Letter)",
       "",
       "popular"
      ],
      [
       "8.5\" × 14\" (Legal)"
      ],
      [
       "11\" × 17\" (Tabloid)"
      ],
      [
       "Custom Size"
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
       "Lightweight, like notebook paper — most economical"
      ],
      [
       "70lb Uncoated",
       "Slightly heavier than copy paper — good all-purpose weight"
      ],
      [
       "80lb Gloss Text",
       "Magazine-page weight with a shiny finish"
      ],
      [
       "80lb Silk Text",
       "Magazine-page weight, no glare"
      ],
      [
       "100lb Gloss Text",
       "Our sturdiest flyer paper — glossy, premium feel",
       "popular"
      ],
      [
       "100lb Silk Text",
       "Our sturdiest flyer paper — smooth, no glare",
       "popular"
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
       "Full Color, Double-Sided"
      ],
      [
       "Full Color, Single-Sided"
      ],
      [
       "Color Front / B&W Back"
      ],
      [
       "B&W, Double-Sided"
      ],
      [
       "B&W, Single-Sided"
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
       "Portrait"
      ],
      [
       "Landscape"
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
       "popular"
      ],
      [
       "Soft Touch Laminate",
       "Velvety, suede-like laminate film — premium tactile feel"
      ],
      [
       "Matte Laminate",
       "Flat, non-reflective laminate film — subdued matte look"
      ],
      [
       "Gloss Laminate",
       "Thick, high-gloss plastic film — most durable, water/scuff resistant"
      ],
      [
       "Gloss UV",
       "Liquid UV coating cured under light — high gloss, thinner than laminate, less scratch-resistant"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — lightest protective sheen, most economical"
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
       "popular"
      ],
      [
       "Spot UV",
       "Selective high-gloss accents over the base finish"
      ],
      [
       "Raised Spot UV",
       "Thicker, tactile UV you can feel — 50-micron raised gloss accents"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents — flat finish"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option"
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
       "No Fold"
      ],
      [
       "Half Fold"
      ],
      [
       "Tri-Fold"
      ],
      [
       "Z-Fold"
      ],
      [
       "Quarter Fold"
      ],
      [
       "Gate Fold"
      ],
      [
       "Accordion Fold"
      ],
      [
       "Roll Fold"
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
       "No Bundle"
      ],
      [
       "25 per pack"
      ],
      [
       "50 per pack"
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
       "Print only"
      ],
      [
       "I also need mailing (EDDM or my own list)"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/products/flyers.jpg"
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
       "popular"
      ],
      [
       "8.5\" × 14\" (Legal flat)"
      ],
      [
       "11\" × 17\" (Tabloid flat)"
      ],
      [
       "11\" × 25.5\" (Tabloid flat — trifold)"
      ],
      [
       "Custom Size"
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
       "Magazine-page weight with a shiny finish"
      ],
      [
       "80lb Silk Text",
       "Magazine-page weight, no glare"
      ],
      [
       "100lb Gloss Text",
       "Heavier, near-cardstock feel — glossy",
       "popular"
      ],
      [
       "100lb Silk Text",
       "Heavier, near-cardstock feel — no glare",
       "popular"
      ],
      [
       "100lb Gloss Cover",
       "Sturdy cardstock — like a magazine cover, glossy"
      ],
      [
       "100lb Silk Cover",
       "Sturdy cardstock — like a magazine cover, no glare"
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
       "Full Color, Double-Sided"
      ],
      [
       "Full Color, Single-Sided"
      ],
      [
       "Color Front / B&W Back"
      ],
      [
       "B&W, Double-Sided"
      ],
      [
       "B&W, Single-Sided"
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
       "popular"
      ],
      [
       "Soft Touch Laminate",
       "Velvety, suede-like laminate film — premium tactile feel"
      ],
      [
       "Matte Laminate",
       "Flat, non-reflective laminate film — subdued matte look"
      ],
      [
       "Gloss Laminate",
       "Thick, high-gloss plastic film — most durable, water/scuff resistant"
      ],
      [
       "Gloss UV",
       "Liquid UV coating cured under light — high gloss, thinner than laminate, less scratch-resistant"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — lightest protective sheen, most economical"
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
       "popular"
      ],
      [
       "Spot UV",
       "Selective high-gloss accents over the base finish"
      ],
      [
       "Raised Spot UV",
       "Thicker, tactile UV you can feel — 50-micron raised gloss accents"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents — flat finish"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option"
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
       "No Fold"
      ],
      [
       "Half Fold"
      ],
      [
       "Tri-Fold"
      ],
      [
       "Z-Fold"
      ],
      [
       "Quarter Fold"
      ],
      [
       "Gate Fold"
      ],
      [
       "Accordion Fold"
      ],
      [
       "Roll Fold"
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
       "No Score"
      ],
      [
       "Score Before Fold"
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
       "No Bundle"
      ],
      [
       "25 per pack"
      ],
      [
       "50 per pack"
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
       "Print only"
      ],
      [
       "I also need mailing (EDDM or my own list)"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/products/brochures.jpg"
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
       "popular"
      ],
      [
       "4.25\" × 5.5\""
      ],
      [
       "5\" × 7\"",
       "",
       "popular"
      ],
      [
       "5.5\" × 8.5\"",
       "",
       "popular"
      ],
      [
       "6\" × 9\""
      ],
      [
       "Custom Size"
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
       "Thinner than 14PT — still sturdy, glossy"
      ],
      [
       "100lb Silk Cover",
       "Thinner than 14PT — still sturdy, satin finish, no glare"
      ],
      [
       "14PT Gloss",
       "Standard postcard thickness — sturdy, glossy finish"
      ],
      [
       "14PT Silk",
       "Standard postcard thickness — smooth satin finish, no glare",
       "popular"
      ],
      [
       "16PT Gloss Cover",
       "Extra-thick, glossy finish"
      ],
      [
       "16PT Silk Cover",
       "Extra-thick, smooth satin finish, no glare"
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
       "Full Color, Double-Sided"
      ],
      [
       "Full Color, Single-Sided"
      ],
      [
       "Color Front / B&W Back"
      ],
      [
       "B&W, Double-Sided"
      ],
      [
       "B&W, Single-Sided"
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
       "Portrait"
      ],
      [
       "Landscape"
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
       "popular"
      ],
      [
       "Soft Touch Laminate",
       "Velvety, suede-like laminate film — premium tactile feel"
      ],
      [
       "Matte Laminate",
       "Flat, non-reflective laminate film — subdued matte look"
      ],
      [
       "Gloss Laminate",
       "Thick, high-gloss plastic film — most durable, water/scuff resistant"
      ],
      [
       "Gloss UV",
       "Liquid UV coating cured under light — high gloss, thinner than laminate, less scratch-resistant"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — lightest protective sheen, most economical"
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
       "popular"
      ],
      [
       "Spot UV",
       "Selective high-gloss accents over the base finish"
      ],
      [
       "Raised Spot UV",
       "Thicker, tactile UV you can feel — 50-micron raised gloss accents"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents — flat finish"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option"
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
       "Square"
      ],
      [
       "Rounded (1/8\")"
      ],
      [
       "Rounded (1/4\")"
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
       "Print only"
      ],
      [
       "I also need mailing (EDDM or my own list)"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/products/postcards.jpg"
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
       "3.5\" × 8.5\""
      ],
      [
       "4\" × 9\"",
       "",
       "popular"
      ],
      [
       "Custom Size"
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
       "Thinner than 14PT — still sturdy enough to stand in a rack"
      ],
      [
       "14PT Gloss",
       "Sturdy card stock — stands up well in display racks",
       "popular"
      ],
      [
       "14PT Silk",
       "Sturdy card stock, smooth satin finish, no glare"
      ],
      [
       "16PT Gloss Cover",
       "Extra-thick, glossy finish"
      ],
      [
       "16PT Silk Cover",
       "Extra-thick, smooth satin finish, no glare"
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
       "Full Color, Double-Sided"
      ],
      [
       "Full Color, Single-Sided"
      ],
      [
       "Color Front / B&W Back"
      ],
      [
       "B&W, Double-Sided"
      ],
      [
       "B&W, Single-Sided"
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
       "popular"
      ],
      [
       "Soft Touch Laminate",
       "Velvety, suede-like laminate film — premium tactile feel"
      ],
      [
       "Matte Laminate",
       "Flat, non-reflective laminate film — subdued matte look"
      ],
      [
       "Gloss Laminate",
       "Thick, high-gloss plastic film — most durable, water/scuff resistant"
      ],
      [
       "Gloss UV",
       "Liquid UV coating cured under light — high gloss, thinner than laminate, less scratch-resistant"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — lightest protective sheen, most economical"
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
       "popular"
      ],
      [
       "Spot UV",
       "Selective high-gloss accents over the base finish"
      ],
      [
       "Raised Spot UV",
       "Thicker, tactile UV you can feel — 50-micron raised gloss accents"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents — flat finish"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/products/rack-cards.jpg"
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
       "3.5\" × 8.5\""
      ],
      [
       "3.5\" × 11\""
      ],
      [
       "4\" × 7\""
      ],
      [
       "4.25\" × 11\"",
       "",
       "popular"
      ],
      [
       "4.25\" × 14\""
      ],
      [
       "Custom Size"
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
       "Lighter, flyer-weight paper — most economical"
      ],
      [
       "100lb Gloss Cover",
       "Thinner than 14PT — still sturdy"
      ],
      [
       "10PT EnduraACE (Weatherproof Synthetic)",
       "Thinner but tear- and weather-resistant — built for outdoor hanging"
      ],
      [
       "14PT Gloss",
       "Standard sturdy card stock, glossy finish",
       "popular"
      ],
      [
       "14PT Silk",
       "Standard sturdy card stock, smooth satin finish, no glare"
      ],
      [
       "16PT Gloss Cover",
       "Extra-thick, glossy finish"
      ],
      [
       "16PT Silk Cover",
       "Extra-thick, smooth satin finish, no glare"
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
       "Full Color, Double-Sided"
      ],
      [
       "Full Color, Single-Sided"
      ],
      [
       "Color Front / B&W Back"
      ],
      [
       "B&W, Double-Sided"
      ],
      [
       "B&W, Single-Sided"
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
       "popular"
      ],
      [
       "Soft Touch Laminate",
       "Velvety, suede-like laminate film — premium tactile feel"
      ],
      [
       "Matte Laminate",
       "Flat, non-reflective laminate film — subdued matte look"
      ],
      [
       "Gloss Laminate",
       "Thick, high-gloss plastic film — most durable, water/scuff resistant"
      ],
      [
       "Gloss UV",
       "Liquid UV coating cured under light — high gloss, thinner than laminate, less scratch-resistant"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — lightest protective sheen, most economical"
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
       "popular"
      ],
      [
       "Spot UV",
       "Selective high-gloss accents over the base finish"
      ],
      [
       "Raised Spot UV",
       "Thicker, tactile UV you can feel — 50-micron raised gloss accents"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents — flat finish"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option"
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
       "Standard"
      ],
      [
       "Arch"
      ],
      [
       "Starburst"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/products/door-hangers.jpg"
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
       "popular"
      ],
      [
       "5\" × 5.5\""
      ],
      [
       "3.5\" × 8.5\" (Tall)"
      ],
      [
       "5\" × 7\""
      ],
      [
       "Custom Size"
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
       "Thinner than 14PT — still sturdy enough to stand"
      ],
      [
       "14PT Gloss",
       "Sturdy card stock — stands up on its own",
       "popular"
      ],
      [
       "14PT Silk",
       "Sturdy card stock, smooth satin finish, no glare"
      ],
      [
       "16PT Gloss Cover",
       "Extra-thick, glossy finish"
      ],
      [
       "16PT Silk Cover",
       "Extra-thick, smooth satin finish, no glare"
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
       "Full Color, Double-Sided"
      ],
      [
       "Full Color, Single-Sided"
      ],
      [
       "Color Front / B&W Back"
      ],
      [
       "B&W, Double-Sided"
      ],
      [
       "B&W, Single-Sided"
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
       "popular"
      ],
      [
       "Soft Touch Laminate",
       "Velvety, suede-like laminate film — premium tactile feel"
      ],
      [
       "Matte Laminate",
       "Flat, non-reflective laminate film — subdued matte look"
      ],
      [
       "Gloss Laminate",
       "Thick, high-gloss plastic film — most durable, water/scuff resistant"
      ],
      [
       "Gloss UV",
       "Liquid UV coating cured under light — high gloss, thinner than laminate, less scratch-resistant"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — lightest protective sheen, most economical"
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
       "popular"
      ],
      [
       "Spot UV",
       "Selective high-gloss accents over the base finish"
      ],
      [
       "Raised Spot UV",
       "Thicker, tactile UV you can feel — 50-micron raised gloss accents"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents — flat finish"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/products/table-tents.jpg"
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
       "Saddle Stitch"
      ],
      [
       "Spiral / Coil"
      ],
      [
       "Perfect Bind"
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
       "popular"
      ],
      [
       "11\" × 17\" (Wall)"
      ],
      [
       "12\" × 12\" (Photo)"
      ],
      [
       "4\" × 9\" (Desk Tent)"
      ],
      [
       "Custom Size"
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
       "popular"
      ],
      [
       "100lb Silk Text",
       "Sturdy, magazine-cover weight — no glare"
      ],
      [
       "14PT Gloss Cover",
       "Thicker card stock — extra durable for daily flipping"
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
       "Full Color, Double-Sided"
      ],
      [
       "Full Color, Single-Sided"
      ],
      [
       "Color Front / B&W Back"
      ],
      [
       "B&W, Double-Sided"
      ],
      [
       "B&W, Single-Sided"
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
       "popular"
      ],
      [
       "Soft Touch Laminate",
       "Velvety, suede-like laminate film — premium tactile feel"
      ],
      [
       "Matte Laminate",
       "Flat, non-reflective laminate film — subdued matte look"
      ],
      [
       "Gloss Laminate",
       "Thick, high-gloss plastic film — most durable, water/scuff resistant — good for daily-handled cover"
      ],
      [
       "Gloss UV",
       "Liquid UV coating cured under light — high gloss, thinner than laminate, less scratch-resistant"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — lightest protective sheen, most economical"
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
       "popular"
      ],
      [
       "Spot UV",
       "Selective high-gloss accents over the base finish"
      ],
      [
       "Raised Spot UV",
       "Thicker, tactile UV you can feel — 50-micron raised gloss accents"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents — flat finish"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option"
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
       "6-Month"
      ],
      [
       "12-Month"
      ],
      [
       "18-Month"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/products/calendars.jpg"
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
       "4.25\" × 11\" (Single fold)"
      ],
      [
       "8.5\" × 11\" (Letter)",
       "",
       "popular"
      ],
      [
       "8.5\" × 14\" (Legal)",
       "",
       "popular"
      ],
      [
       "11\" × 17\" (Tabloid)"
      ],
      [
       "Custom Size"
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
       "Lighter, flyer-weight — budget option, glossy"
      ],
      [
       "80lb Silk Text",
       "Lighter, flyer-weight — budget option, no glare"
      ],
      [
       "100lb Gloss Text",
       "Sturdier text weight, glossy"
      ],
      [
       "100lb Silk Text",
       "Sturdier text weight, no glare"
      ],
      [
       "100lb Gloss Cover",
       "Sturdy cardstock — holds up well to handling & spills, glossy",
       "popular"
      ],
      [
       "100lb Silk Cover",
       "Sturdy cardstock — holds up well to handling & spills, no glare",
       "popular"
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
       "Full Color, Double-Sided"
      ],
      [
       "Full Color, Single-Sided"
      ],
      [
       "Color Front / B&W Back"
      ],
      [
       "B&W, Double-Sided"
      ],
      [
       "B&W, Single-Sided"
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
       "Portrait"
      ],
      [
       "Landscape"
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
       "popular"
      ],
      [
       "Soft Touch Laminate",
       "Velvety, suede-like laminate film — premium tactile feel"
      ],
      [
       "Matte Laminate",
       "Flat, non-reflective laminate film — subdued matte look"
      ],
      [
       "Gloss Laminate",
       "Thick, high-gloss plastic film — most durable, water/scuff resistant, best for wipeable menus"
      ],
      [
       "Gloss UV",
       "Liquid UV coating cured under light — high gloss, thinner than laminate, less scratch-resistant"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — lightest protective sheen, most economical"
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
       "popular"
      ],
      [
       "Spot UV",
       "Selective high-gloss accents over the base finish"
      ],
      [
       "Raised Spot UV",
       "Thicker, tactile UV you can feel — 50-micron raised gloss accents"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents — flat finish"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option"
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
       "No Fold"
      ],
      [
       "Half Fold"
      ],
      [
       "Tri-Fold"
      ],
      [
       "Z-Fold"
      ],
      [
       "Quarter Fold"
      ],
      [
       "Gate Fold"
      ],
      [
       "Accordion Fold"
      ],
      [
       "Roll Fold"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/products/menus.jpg"
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
       "popular"
      ],
      [
       "12\" × 16\""
      ],
      [
       "Custom Size"
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
       "popular"
      ],
      [
       "70lb Uncoated",
       "Slightly heavier — holds up a bit better under plates/utensils"
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
       "Full Color, Double-Sided"
      ],
      [
       "Full Color, Single-Sided"
      ],
      [
       "Color Front / B&W Back"
      ],
      [
       "B&W, Double-Sided"
      ],
      [
       "B&W, Single-Sided"
      ]
     ],
     "short": "Print"
    }
   ],
   "img": "images/products/placemats.jpg"
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
       "popular"
      ],
      [
       "1.75\" × 3.5\" (Slim)"
      ],
      [
       "2\" × 2\" (Square)"
      ],
      [
       "Custom Size"
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
       "Noticeably thinner than 14PT — easy on the wallet!"
      ],
      [
       "14PT Gloss",
       "Sharp colors, glossy finish"
      ],
      [
       "14PT Silk",
       "Most common choice — smooth satin finish, no glare",
       "popular"
      ],
      [
       "16PT Silk",
       "Smooth satin finish, rich colors — one of our most-used weights (Veritiv Endurance)",
       "popular"
      ],
      [
       "16PT Linen",
       "Textured classic feel"
      ],
      [
       "Metallic / Foil Board",
       "Eye-catching shimmer — great for luxury brands"
      ],
      [
       "Plastic / PVC",
       "Waterproof & durable — credit card feel"
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
       "Full Color, Double-Sided"
      ],
      [
       "Full Color, Single-Sided"
      ],
      [
       "Color Front / B&W Back"
      ],
      [
       "B&W, Double-Sided"
      ],
      [
       "B&W, Single-Sided"
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
       "Portrait"
      ],
      [
       "Landscape"
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
       "popular"
      ],
      [
       "Soft Touch Laminate",
       "Velvety, suede-like laminate film — premium tactile feel"
      ],
      [
       "Matte Laminate",
       "Flat, non-reflective laminate film — subdued matte look"
      ],
      [
       "Gloss Laminate",
       "Thick, high-gloss plastic film — most durable, water/scuff resistant"
      ],
      [
       "Gloss UV",
       "Liquid UV coating cured under light — high gloss, thinner than laminate, less scratch-resistant"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — lightest protective sheen, most economical"
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
       "popular"
      ],
      [
       "Spot UV",
       "Selective high-gloss accents over the base finish"
      ],
      [
       "Raised Spot UV",
       "Thicker, tactile UV you can feel — 50-micron raised gloss accents"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents — flat finish"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option"
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
       "Square"
      ],
      [
       "Rounded (1/8\")"
      ],
      [
       "Rounded (1/4\")"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/products/business-cards.jpg"
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
       "popular"
      ],
      [
       "2\" × 4\""
      ],
      [
       "3\" × 3\""
      ],
      [
       "3.5\" × 5\""
      ],
      [
       "Custom Size"
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
       "Standard sturdy card stock, glossy finish"
      ],
      [
       "14PT Silk",
       "Standard sturdy card stock, smooth satin finish, no glare",
       "popular"
      ],
      [
       "16PT Gloss Cover",
       "Extra-thick, glossy finish"
      ],
      [
       "16PT Silk Cover",
       "Extra-thick, smooth satin finish, no glare"
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
       "Full Color, Double-Sided"
      ],
      [
       "Full Color, Single-Sided"
      ],
      [
       "Color Front / B&W Back"
      ],
      [
       "B&W, Double-Sided"
      ],
      [
       "B&W, Single-Sided"
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
       "popular"
      ],
      [
       "Soft Touch Laminate",
       "Velvety, suede-like laminate film — premium tactile feel"
      ],
      [
       "Matte Laminate",
       "Flat, non-reflective laminate film — subdued matte look"
      ],
      [
       "Gloss Laminate",
       "Thick, high-gloss plastic film — most durable, water/scuff resistant"
      ],
      [
       "Gloss UV",
       "Liquid UV coating cured under light — high gloss, thinner than laminate, less scratch-resistant"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — lightest protective sheen, most economical"
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
       "popular"
      ],
      [
       "Spot UV",
       "Selective high-gloss accents over the base finish"
      ],
      [
       "Raised Spot UV",
       "Thicker, tactile UV you can feel — 50-micron raised gloss accents"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents — flat finish"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option"
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
       "Square"
      ],
      [
       "Rounded (1/8\")"
      ],
      [
       "Rounded (1/4\")"
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
       "No Hole"
      ],
      [
       "Drill Hole (1/8\")"
      ],
      [
       "Bottleneck Die-Cut"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/products/hang-tags.jpg"
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
       "popular"
      ],
      [
       "8.5\" × 14\" (Legal)"
      ],
      [
       "11\" × 8.5\" (Landscape)"
      ],
      [
       "Custom Size"
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
       "Solid cardstock feel, glossy"
      ],
      [
       "80lb Uncoated Cover",
       "Solid cardstock feel, natural non-shiny finish"
      ],
      [
       "100lb Gloss Cover",
       "Our sturdiest option — premium glossy finish",
       "popular"
      ],
      [
       "100lb Silk Cover",
       "Our sturdiest option — premium, no glare"
      ],
      [
       "Parchment / Linen",
       "Textured, formal finish — traditional certificate look",
       "popular"
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
       "Full Color, Double-Sided"
      ],
      [
       "Full Color, Single-Sided"
      ],
      [
       "Color Front / B&W Back"
      ],
      [
       "B&W, Double-Sided"
      ],
      [
       "B&W, Single-Sided"
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
       "popular"
      ],
      [
       "Soft Touch Laminate",
       "Velvety, suede-like laminate film — premium tactile feel"
      ],
      [
       "Matte Laminate",
       "Flat, non-reflective laminate film — subdued matte look"
      ],
      [
       "Gloss Laminate",
       "Thick, high-gloss plastic film — most durable, good for display/award certificates"
      ],
      [
       "Gloss UV",
       "Liquid UV coating cured under light — high gloss, thinner than laminate, less scratch-resistant"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — lightest protective sheen, most economical"
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
       "popular"
      ],
      [
       "Spot UV",
       "Selective high-gloss accents over the base finish"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents — flat finish, classic gold/silver seal look"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/products/certificates.jpg"
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
       "2\" × 2\""
      ],
      [
       "2\" × 3\""
      ],
      [
       "3\" × 3\"",
       "",
       "popular"
      ],
      [
       "3\" × 4\"",
       "",
       "popular"
      ],
      [
       "4\" × 4\""
      ],
      [
       "4\" × 6\""
      ],
      [
       "Custom Size"
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
       "popular"
      ],
      [
       "White Silk Vinyl"
      ],
      [
       "Clear Gloss Vinyl"
      ],
      [
       "Clear Silk Vinyl"
      ],
      [
       "Kraft / Recycled"
      ],
      [
       "Foil (Gold/Silver)"
      ],
      [
       "Holographic"
      ],
      [
       "Glitter"
      ],
      [
       "Reflective"
      ],
      [
       "Glow-in-the-Dark"
      ],
      [
       "Static Cling (Removable)"
      ],
      [
       "Polyester (Waterproof)"
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
       "Die-Cut"
      ],
      [
       "Kiss-Cut"
      ],
      [
       "Circle"
      ],
      [
       "Oval"
      ],
      [
       "Square / Rect"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/products/stickers-labels.jpg"
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
       "popular"
      ],
      [
       "24\" × 36\""
      ],
      [
       "Custom Size"
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
       "4mm White Coroplast"
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
       "Single-Sided"
      ],
      [
       "Double-Sided"
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
       "Portrait"
      ],
      [
       "Landscape"
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
       "H-Stake"
      ],
      [
       "A-Frame Stand"
      ],
      [
       "Post & Frame"
      ],
      [
       "Sign Only"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/products/yard-signs.jpg"
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
       "Indoors"
      ],
      [
       "Outdoors"
      ],
      [
       "Event or trade show"
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
       "popular"
      ],
      [
       "12\" × 18\""
      ],
      [
       "18\" × 24\"",
       "",
       "popular"
      ],
      [
       "24\" × 36\""
      ],
      [
       "Custom Size"
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
       "Magazine-page weight with a shiny finish"
      ],
      [
       "80lb Silk Text",
       "Magazine-page weight, no glare"
      ],
      [
       "100lb Gloss Text",
       "Our sturdiest poster paper — glossy, vivid colors",
       "popular"
      ],
      [
       "100lb Silk Text",
       "Our sturdiest poster paper — no glare, easy to read from an angle"
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
       "Single-Sided"
      ],
      [
       "Double-Sided"
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
       "Portrait"
      ],
      [
       "Landscape"
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
       "popular"
      ],
      [
       "Soft Touch Laminate",
       "Velvety, suede-like laminate film — premium tactile feel"
      ],
      [
       "Matte Laminate",
       "Flat, non-reflective laminate film — subdued matte look"
      ],
      [
       "Gloss Laminate",
       "Thick, high-gloss plastic film — most durable, water/scuff resistant, good for repeated handling/display"
      ],
      [
       "Gloss UV",
       "Liquid UV coating cured under light — high gloss, thinner than laminate, less scratch-resistant"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — lightest protective sheen, most economical"
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
       "popular"
      ],
      [
       "Spot UV",
       "Selective high-gloss accents over the base finish"
      ],
      [
       "Raised Spot UV",
       "Thicker, tactile UV you can feel — 50-micron raised gloss accents"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents — flat finish"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/products/posters.jpg"
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
       "Saddle Stitch"
      ],
      [
       "Spiral / Coil"
      ],
      [
       "Perfect Bind"
      ]
     ]
    },
    {
     "k": "size",
     "label": "Size",
     "type": "size",
     "opts": [
      [
       "4.25\" × 5.5\""
      ],
      [
       "5.5\" × 8.5\""
      ],
      [
       "8.5\" × 11\"",
       "",
       "popular"
      ],
      [
       "Custom Size"
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
       "80lb Gloss Cover"
      ],
      [
       "80lb Silk Cover"
      ],
      [
       "100lb Gloss Cover"
      ],
      [
       "100lb Silk Cover"
      ],
      [
       "12PT Card Stock"
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
       "60lb Offset Text"
      ],
      [
       "70lb Text"
      ],
      [
       "80lb Gloss Text"
      ],
      [
       "80lb Silk Text"
      ],
      [
       "100lb Gloss Text"
      ],
      [
       "100lb Silk Text"
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
       "Full Color, Both Sides"
      ],
      [
       "Full Color, Outside Only"
      ],
      [
       "B&W, Both Sides"
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
       "Full Color, Double-Sided"
      ],
      [
       "B&W, Double-Sided"
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
       "Portrait"
      ],
      [
       "Landscape"
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
       "popular"
      ],
      [
       "Soft Touch Laminate",
       "Velvety, suede-like laminate film — premium tactile feel"
      ],
      [
       "Matte Laminate",
       "Flat, non-reflective laminate film — subdued matte look"
      ],
      [
       "Gloss Laminate",
       "Thick, high-gloss plastic film — most durable, water/scuff resistant"
      ],
      [
       "Gloss UV",
       "Liquid UV coating cured under light — high gloss, thinner than laminate, less scratch-resistant"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — lightest protective sheen, most economical"
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
       "popular"
      ],
      [
       "Spot UV",
       "Selective high-gloss accents over the base finish"
      ],
      [
       "Raised Spot UV",
       "Thicker, tactile UV you can feel — 50-micron raised gloss accents"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents — flat finish"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/products/booklets.jpg"
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
       "popular"
      ],
      [
       "9\" × 14.5\" (Legal)"
      ],
      [
       "6\" × 9\" (Half Size)"
      ],
      [
       "Custom Size"
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
       "Thinner than 14PT — still holds its shape"
      ],
      [
       "14PT Gloss",
       "Standard sturdy card stock, glossy finish",
       "popular"
      ],
      [
       "14PT Silk",
       "Standard sturdy card stock, smooth satin finish, no glare"
      ],
      [
       "16PT Gloss Cover",
       "Extra-thick, glossy finish"
      ],
      [
       "16PT Silk",
       "Extra-thick, smooth satin finish",
       "popular"
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
       "Full Color, Double-Sided"
      ],
      [
       "Full Color, Single-Sided"
      ],
      [
       "Color Front / B&W Back"
      ],
      [
       "B&W, Double-Sided"
      ],
      [
       "B&W, Single-Sided"
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
       "popular"
      ],
      [
       "Soft Touch Laminate",
       "Velvety, suede-like laminate film — premium tactile feel"
      ],
      [
       "Matte Laminate",
       "Flat, non-reflective laminate film — subdued matte look"
      ],
      [
       "Gloss Laminate",
       "Thick, high-gloss plastic film — most durable, water/scuff resistant"
      ],
      [
       "Gloss UV",
       "Liquid UV coating cured under light — high gloss, thinner than laminate, less scratch-resistant"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — lightest protective sheen, most economical"
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
       "popular"
      ],
      [
       "Spot UV",
       "Selective high-gloss accents over the base finish"
      ],
      [
       "Raised Spot UV",
       "Thicker, tactile UV you can feel — 50-micron raised gloss accents"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents — flat finish"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option"
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
       "Two Pockets"
      ],
      [
       "One Pocket (Right)"
      ],
      [
       "One Pocket (Left)"
      ],
      [
       "No Pocket"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/products/presentation-folders.jpg"
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
       "8.5\" × 11\""
      ],
      [
       "5.5\" × 8.5\""
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
       "popular"
      ],
      [
       "24lb Laid White",
       "Textured, formal feel — classic stationery texture"
      ],
      [
       "28lb Linen Bright White",
       "Textured linen finish — upscale, formal look"
      ],
      [
       "32lb Premium Bond",
       "Noticeably heavier than standard bond — premium feel",
       "popular"
      ],
      [
       "60lb Offset White",
       "Lightweight, economical option"
      ],
      [
       "70lb Text White",
       "Slightly heavier than standard bond"
      ],
      [
       "80lb Text White",
       "Sturdiest text-weight option"
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
       "Full Color, Double-Sided"
      ],
      [
       "Full Color, Single-Sided"
      ],
      [
       "Color Front / B&W Back"
      ],
      [
       "B&W, Double-Sided"
      ],
      [
       "B&W, Single-Sided"
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
       "popular"
      ],
      [
       "Aqueous Coating",
       "Thin water-based coating — light protective sheen, resists fingerprints/light moisture"
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
       "popular"
      ],
      [
       "Foil Stamping",
       "Hot-stamped metallic foil accents on logo/border — flat finish"
      ],
      [
       "Raised Foil",
       "Foil stamping with raised texture — most premium option"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/products/letterhead-envelopes.jpg"
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
       "popular"
      ],
      [
       "#9 (8.875\" × 3.875\")"
      ],
      [
       "A2 (4.375\" × 5.75\")"
      ],
      [
       "A7 (5.25\" × 7.25\")"
      ],
      [
       "4\" × 6\""
      ],
      [
       "5\" × 7\""
      ],
      [
       "6\" × 9\""
      ],
      [
       "9\" × 12\""
      ],
      [
       "Custom Size"
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
       "popular"
      ],
      [
       "60lb Offset White",
       "Lightweight, economical option"
      ],
      [
       "70lb Text White",
       "Slightly heavier — sturdier feel"
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
       "Full Color, Double-Sided"
      ],
      [
       "Full Color, Single-Sided"
      ],
      [
       "Color Front / B&W Back"
      ],
      [
       "B&W, Double-Sided"
      ],
      [
       "B&W, Single-Sided"
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
       "Blank"
      ],
      [
       "Window"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/products/envelopes.jpg"
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
       "popular"
      ],
      [
       "8.875\" × 3.875\" (#9)"
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
       "popular"
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
       "Full Color, Both Sides"
      ],
      [
       "Full Color, Front Only"
      ],
      [
       "Full Color, Back Only"
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
       "Short Flap"
      ],
      [
       "Long Flap"
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
       "No Shrink Wrapping"
      ],
      [
       "Shrink Wrap 50 Per Package"
      ]
     ],
     "more": true
    }
   ]
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
       "3.5\" × 8.5\""
      ],
      [
       "4.25\" × 5.5\" (Half Letter)",
       "",
       "popular"
      ],
      [
       "5.5\" × 8.5\" (Half Letter tall)",
       "",
       "popular"
      ],
      [
       "8.5\" × 11\" (Letter)"
      ],
      [
       "Custom Size"
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
       "popular"
      ],
      [
       "70lb Text",
       "Slightly heavier — less see-through when writing"
      ],
      [
       "80lb Text",
       "Sturdiest option — minimal show-through, premium feel"
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
       "Full Color, Double-Sided"
      ],
      [
       "Full Color, Single-Sided"
      ],
      [
       "Color Front / B&W Back"
      ],
      [
       "B&W, Double-Sided"
      ],
      [
       "B&W, Single-Sided"
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
       "Portrait"
      ],
      [
       "Landscape"
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
       "25 Sheets"
      ],
      [
       "50 Sheets"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/products/notepads.jpg"
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
       "4.25\" × 5.5\""
      ],
      [
       "5.5\" × 8.5\"",
       "",
       "popular"
      ],
      [
       "8.5\" × 11\""
      ],
      [
       "Custom Size"
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
       "popular"
      ],
      [
       "NCR 3-Part (White / Canary / Pink)"
      ],
      [
       "NCR 4-Part (White / Canary / Pink / Goldenrod)"
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
       "Full Color, Double-Sided"
      ],
      [
       "Full Color, Single-Sided"
      ],
      [
       "Color Front / B&W Back"
      ],
      [
       "B&W, Double-Sided"
      ],
      [
       "B&W, Single-Sided"
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
       "No Numbering"
      ],
      [
       "Sequential Numbering"
      ]
     ],
     "more": true
    }
   ],
   "img": "images/products/invoice-books.jpg"
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
       "Indoors"
      ],
      [
       "Outdoors"
      ],
      [
       "Event or trade show"
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
       "images/home/vinyl-banners.jpg"
      ],
      [
       "18oz Blockout Vinyl Banner",
       "Indoor and outdoor. A blockout layer allows printing on both sides; often used for street and light-pole banners."
      ],
      [
       "Backlit Banner",
       "Made for light boxes; best at night with the light on."
      ],
      [
       "Mesh Banner",
       "Indoor and outdoor; lets wind pass through."
      ],
      [
       "Indoor Banner (smooth)",
       "Single-sided, smooth finish for close-up indoor use; also holds up outdoors."
      ],
      [
       "Pole Banner Set",
       "Double-sided 18oz blockout vinyl with pole pockets and four corner grommets; hardware optional."
      ],
      [
       "9oz Fabric Banner (wrinkle-free)",
       "Single-sided dye-sublimated polyester; indoor."
      ],
      [
       "Blockout Fabric Banner (9.5oz)",
       "Blockout fabric banner."
      ],
      [
       "Tension Fabric",
       "Single-sided, 2-way stretch polyester."
      ],
      [
       "Hand Banner (set of 10)",
       "13oz matte vinyl, 9.5 in tall, single-sided; with or without hardware."
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
       "Single-sided"
      ],
      [
       "Double-sided",
       "Fabric, tension, indoor and hand banners are single-sided only."
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
       "Hems + grommets (standard)"
      ],
      [
       "Hems only"
      ],
      [
       "Pole pocket (2\", 3\" or 4\")"
      ],
      [
       "Sewn-in rope (3/16\" or 5/16\")"
      ],
      [
       "Windslits"
      ],
      [
       "Reinforced corners (banner tabs)"
      ],
      [
       "Velcro (single-sided only)"
      ],
      [
       "Webbing and D-rings"
      ],
      [
       "Heat-knife cut edge, no hem (fabric)"
      ],
      [
       "No finishing"
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
       "Banner + hardware"
      ],
      [
       "Banner only"
      ],
      [
       "Hardware only"
      ]
     ],
     "more": true,
     "short": "Hardware"
    }
   ],
   "img": "images/home/vinyl-banners.jpg"
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
       "Indoors"
      ],
      [
       "Outdoors"
      ],
      [
       "Event or trade show"
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
       "images/home/yard-signs.jpg"
      ],
      [
       "PVC Board (1/8\")",
       "Water-resistant; indoor and outdoor."
      ],
      [
       "Foam Board (3/16\")",
       "Indoor only; not waterproof.",
       "",
       "indoor",
       "images/home/foam-board-signs.jpg"
      ],
      [
       "Styrene (.020\")",
       "Thin white polystyrene sheet; indoor and outdoor; single-sided."
      ],
      [
       "Metal Sign (16 gauge steel)",
       "Powder-coated; indoor and outdoor."
      ],
      [
       "Magnet (30 mil)",
       "Printed on one side only; indoor and outdoor; waterproof and UV safe."
      ],
      [
       "Reflective Coroplast",
       "4mm coroplast with reflective vinyl; medium-term outdoor use."
      ],
      [
       "Reflective PVC Board"
      ],
      [
       "Reflective Aluminum Sign"
      ],
      [
       "Dry-Erase Coroplast",
       "4mm coroplast with a dry-erase coating."
      ],
      [
       "Dry-Erase Magnet"
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
       "Single-sided"
      ],
      [
       "Double-sided",
       "Not for styrene or magnets (one side only)."
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
       "Grommets"
      ],
      [
       "H-stake (steel)",
       "H-stakes are for coroplast yard signs."
      ],
      [
       "None"
      ]
     ],
     "short": "Add-ons"
    }
   ],
   "img": "images/home/foam-board-signs.jpg"
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
       "Indoors"
      ],
      [
       "Outdoors"
      ],
      [
       "Event or trade show"
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
       "Popular"
      ],
      [
       "Adhesive Window Perf",
       "70/30 perforated film: graphic on one side, clear view from the other; indoor or outdoor."
      ],
      [
       "Adhesive Vinyl (high performance)",
       "3 mil film; removable; use on clean, flat, smooth surfaces only."
      ],
      [
       "Adhesive Clear Vinyl",
       "4 mil clear film with permanent adhesive."
      ],
      [
       "Adhesive Translucent Vinyl"
      ],
      [
       "Adhesive Wall Fabric",
       "6.5 mil fabric-style film; repositionable; for wall murals and temporary wall decals."
      ],
      [
       "Floor Graphics",
       "Textured slip-resistant laminate; indoor only.",
       "",
       "indoor"
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
   "img": "images/products/window-clings.jpg"
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
       "15 mil semi-gloss artist canvas; ships rolled and unstretched; indoor."
      ],
      [
       "Acrylic Print"
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
   ]
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
       "Feather"
      ],
      [
       "Teardrop"
      ],
      [
       "Pole flag"
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
       "Single-sided"
      ],
      [
       "Double-sided"
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
       "Flag + hardware"
      ],
      [
       "Flag only"
      ],
      [
       "Not sure — recommend for me"
      ]
     ],
     "short": "Hardware"
    }
   ]
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
       "images/home/retractable-banners.jpg"
      ],
      [
       "Another kind of stand (tell us below)"
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
   "img": "images/home/retractable-banners.jpg"
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
       "10 × 10 ft"
      ],
      [
       "10 × 15 ft"
      ],
      [
       "10 × 20 ft"
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
   ]
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
   ]
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
       "Indoors"
      ],
      [
       "Outdoors"
      ],
      [
       "Event or trade show"
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
       "Non-adhesive, matte, single-sided; smooth for close-up indoor use and holds up outdoors."
      ],
      [
       "Backlit Film",
       "For light boxes and backlit displays."
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
   ]
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
   ]
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
   ]
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
   ]
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
   ]
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
   ]
  }
 }
};
