import {
	alwaysCreateMicroInteractions,
	flippingCardsPerspective,
	goldenRatioCSS,
	intersectionObserverStorytelling,
	cascadingTextEffect,
	lazyLoadEverything,
	everydayGyroscopeUses,
	accessibleCodeIsEasier,
	moreInterestingGalleries,
	webARSnapchat,
	transparentVideosCanvas,
	clipPathEffectsFilesize
} from "Data/articles.js";

export const projects = [
	{
		title: "The Handmaiden",
		safeTitle: "the-handmaiden",
		date: "2016-08",
		description: [
			"A companion site for Park Chan-Wook's 2016 film of the same name, with heavy emphasis placed on its artwork matching aesthetic.",
			"Winner of the 'Best Online Campaign of the Year' Screen Award, 2017."
		],
		images: {
			desktop: [
				{
					src: "Assets/composites/the-handmaiden/desktop/home__01",
					page: "home",
					description: "",
					id: "the_handmaiden__desktop__landing"
				}, {
					src: "Assets/composites/the-handmaiden/desktop/home__02",
					description: "",
					page: "home",
					id: "the_handmaiden__desktop__synopsis"
				}, {
					src: "Assets/composites/the-handmaiden/desktop/home__03",
					description: "",
					page: "home",
					id: "the_handmaiden__desktop__gallery"
				}, {
					src: "Assets/composites/the-handmaiden/desktop/home__04",
					description: "",
					page: "home",
					id: "the_handmaiden__desktop__characters"
				}, {
					src: "Assets/composites/the-handmaiden/desktop/home__05",
					description: "",
					page: "home",
					id: "the_handmaiden__desktop__read_more"
				}, {
					src: "Assets/composites/the-handmaiden/desktop/home__06",
					description: "",
					page: "home",
					id: "the_handmaiden__desktop__trailer"
				}, {
					src: "Assets/composites/the-handmaiden/desktop/biography",
					description: "",
					page: "biography",
					id: "the_handmaiden__desktop__biography"
				}, {
					src: "Assets/composites/the-handmaiden/desktop/filmography",
					description: "",
					page: "filmography",
					id: "the_handmaiden__desktop__filmography"
				}, {
					src: "Assets/composites/the-handmaiden/desktop/novel",
					description: "",
					page: "novel",
					id: "the_handmaiden__desktop__novel"
				}, 
			],
			tablet: [
				{
					src: "Assets/composites/the-handmaiden/tablet/home__01",
					description: "",
					page: "home",
					id: "the_handmaiden__tablet__landing"
				}, {
					src: "Assets/composites/the-handmaiden/tablet/home__02",
					description: "",
					page: "home",
					id: "the_handmaiden__tablet__synopsis"
				}, {
					src: "Assets/composites/the-handmaiden/tablet/home__03",
					description: "",
					page: "home",
					id: "the_handmaiden__tablet__gallery"
				}, {
					src: "Assets/composites/the-handmaiden/tablet/home__04",
					description: "",
					page: "home",
					id: "the_handmaiden__tablet__characters"
				}, {
					src: "Assets/composites/the-handmaiden/tablet/home__05",
					description: "",
					page: "home",
					id: "the_handmaiden__tablet__read_more"
				}, {
					src: "Assets/composites/the-handmaiden/tablet/home__06",
					description: "",
					page: "home",
					id: "the_handmaiden__tablet__trailer"
				}, {
					src: "Assets/composites/the-handmaiden/tablet/biography",
					description: "",
					page: "biography",
					id: "the_handmaiden__tablet__biography"
				}, {
					src: "Assets/composites/the-handmaiden/tablet/filmography",
					description: "",
					page: "filmography",
					id: "the_handmaiden__tablet__filmography"
				}, {
					src: "Assets/composites/the-handmaiden/tablet/novel",
					description: "",
					page: "novel",
					id: "the_handmaiden__tablet__novel"
				}
			],
			mobile: [
				{
					src: "Assets/composites/the-handmaiden/mobile/home__01",
					description: "",
					page: "home",
					id: "the_handmaiden__mobile__landing"
				}, {
					src: "Assets/composites/the-handmaiden/mobile/home__02",
					description: "",
					page: "home",
					id: "the_handmaiden__mobile__synopsis"
				}, {
					src: "Assets/composites/the-handmaiden/mobile/home__03",
					description: "",
					page: "home",
					id: "the_handmaiden__mobile__gallery"
				}, {
					src: "Assets/composites/the-handmaiden/mobile/home__04",
					description: "",
					page: "home",
					id: "the_handmaiden__mobile__characters"
				}, {
					src: "Assets/composites/the-handmaiden/mobile/home__05",
					description: "",
					page: "home",
					id: "the_handmaiden__mobile__read_more"
				}, {
					src: "Assets/composites/the-handmaiden/mobile/home__06",
					description: "",
					page: "home",
					id: "the_handmaiden__mobile__trailer"
				}, {
					src: "Assets/composites/the-handmaiden/mobile/biography",
					description: "",
					page: "biography",
					id: "the_handmaiden__mobile__biography"
				}, {
					src: "Assets/composites/the-handmaiden/mobile/filmography",
					description: "",
					page: "filmography",
					id: "the_handmaiden__mobile__filmography"
				}, {
					src: "Assets/composites/the-handmaiden/mobile/novel",
					description: "",
					page: "novel",
					id: "the_handmaiden__mobile__novel"
				}
			],
		},
		pages: [ 
			"Landing", 
			"Synopsis", 
			"Gallery", 
			"Characters", 
			"Further", 
			"Trailer", 
			"Biography", 
			"Filmography", 
			"Novel" 
		],
		tags: [
			"HTML",
			"CSS3",
			"ES6",
			"Preact"
		],
		articles: [
			alwaysCreateMicroInteractions
		]
	},
	{
		title: "Suspiria",
		safeTitle: "suspiria",
		date: "2018-11",
		description: [
			"A media-rich promotional site for Luca Guadagnino's 2018 remake of Suspiria. Awarded 'Honourable Mention' for Awwwards SOTD, nov 2018."
		],
		images: {
			desktop: [
				{
					src: "Assets/composites/suspiria/desktop/home__01",
					description: "",
					page: "home",
					id: "suspiria__desktop__landing"
				},{
					src: "Assets/composites/suspiria/desktop/home__02",
					description: "",
					page: "home",
					id: "suspiria__desktop__tanz"
				},{
					src: "Assets/composites/suspiria/desktop/home__03",
					description: "",
					page: "home",
					id: "suspiria__desktop__mother"
				},{
					src: "Assets/composites/suspiria/desktop/home__04",
					description: "",
					page: "home",
					id: "suspiria__desktop__reviews"
				},{
					src: "Assets/composites/suspiria/desktop/legends__landing",
					description: "",
					page: "legends__landing",
					id: "suspiria__desktop__legends_closed"
				},{
					src: "Assets/composites/suspiria/desktop/legends__gallery",
					description: "",
					page: "legends__gallery",
					id: "suspiria__desktop__legends_open"
				},{
					src: "Assets/composites/suspiria/desktop/whispers",
					description: "",
					page: "whispers",
					id: "suspiria__desktop__soundtrack"
				},{
					src: "Assets/composites/suspiria/desktop/videos",
					description: "",
					page: "videos",
					id: "suspiria__desktop__videos"
				}
			],
			tablet: [
				{
					src: "Assets/composites/suspiria/tablet/home__01",
					description: "",
					page: "home",
					id: "suspiria__tablet__landing"
				},{
					src: "Assets/composites/suspiria/tablet/home__02",
					description: "",
					page: "home",
					id: "suspiria__tablet__tanz"
				},{
					src: "Assets/composites/suspiria/tablet/home__03",
					description: "",
					page: "home",
					id: "suspiria__tablet__mother"
				},{
					src: "Assets/composites/suspiria/tablet/home__04",
					description: "",
					page: "home",
					id: "suspiria__tablet__reviews"
				},{
					src: "Assets/composites/suspiria/tablet/legends__landing",
					description: "",
					page: "legends__landing",
					id: "suspiria__tablet__legends_closed"
				},{
					src: "Assets/composites/suspiria/tablet/legends__gallery",
					description: "",
					page: "legends__gallery",
					id: "suspiria__tablet__legends_open"
				},{
					src: "Assets/composites/suspiria/tablet/whispers",
					description: "",
					page: "whispers",
					id: "suspiria__tablet__soundtrack"
				},{
					src: "Assets/composites/suspiria/tablet/videos",
					description: "",
					page: "videos",
					id: "suspiria__tablet__videos"
				}
			],
			mobile: [
				{
					src: "Assets/composites/suspiria/mobile/home__01",
					description: "",
					page: "home",
					id: "suspiria__mobile__landing"
				},{
					src: "Assets/composites/suspiria/mobile/home__02",
					description: "",
					page: "home",
					id: "suspiria__mobile__tanz"
				},{
					src: "Assets/composites/suspiria/mobile/home__03",
					description: "",
					page: "home",
					id: "suspiria__mobile__mother"
				},{
					src: "Assets/composites/suspiria/mobile/home__04",
					description: "",
					page: "home",
					id: "suspiria__mobile__reviews"
				},{
					src: "Assets/composites/suspiria/mobile/legends__landing",
					description: "",
					page: "legends__landing",
					id: "suspiria__mobile__legends_closed"
				},{
					src: "Assets/composites/suspiria/mobile/legends__gallery",
					description: "",
					page: "legends__gallery",
					id: "suspiria__mobile__legends_open"
				},{
					src: "Assets/composites/suspiria/mobile/whispers",
					description: "",
					page: "whispers",
					id: "suspiria__mobile__soundtrack"
				},{
					src: "Assets/composites/suspiria/mobile/videos",
					description: "",
					page: "videos",
					id: "suspiria__mobile__videos"
				}
			],
		},
		pages: [ 
			"Landing",
			"Summary",
			"The Mothers",
			"Reviews",
			"Gallery Selection",
			"Gallery",
			"Soundtrack",
			"Videos"
		],
		tags: [
			"HTML",
			"CSS3",
			"ES6",
			"Preact"
		],
		articles: [
			transparentVideosCanvas, 
			clipPathEffectsFilesize,
			alwaysCreateMicroInteractions,
			everydayGyroscopeUses,
			accessibleCodeIsEasier,
			moreInterestingGalleries
		]
	},{
		title: "Alien Covenant",
		safeTitle: "alien-covenant",
		date: "2017-05",
		description: [
			"A hub site for promotional materials related to the UK-release of Ridley Scott's Alien Covenant."
		],
		images: {
			desktop: [
				{
					src: "Assets/composites/alien-covenant/desktop/home",
					description: "",
					page: "home",
					id: "alien_covenant__desktop__home"
				},{
					src: "Assets/composites/alien-covenant/desktop/synopsis",
					description: "",
					page: "synopsis",
					id: "alien_covenant__desktop__synopsis"
				}
			],
			tablet: [
				{
					src: "Assets/composites/alien-covenant/tablet/home",
					description: "",
					page: "home",
					id: "alien_covenant__tablet__home"
				},{
					src: "Assets/composites/alien-covenant/tablet/synopsis",
					description: "",
					page: "synopsis",
					id: "alien_covenant__tablet__synopsis"
				}
			],
			mobile: [
				{
					src: "Assets/composites/alien-covenant/mobile/home",
					description: "",
					page: "home",
					id: "alien_covenant__device__home"
				},{
					src: "Assets/composites/alien-covenant/mobile/synopsis",
					description: "",
					page: "synopsis",
					id: "alien_covenant__device__synopsis"
				}
			],
		},
		pages: [ 
			"Home",
			"Synopsis"
		],
		tags: [
			"HTML",
			"CSS3",
			"ES6",
			"Preact"
		]
	},{
		title: "Get Out Artbook",
		safeTitle: "get-out-artbook",
		date: "2017-09",
		description: [
			"A site to showcase the artwork and artists commissioned for the Art Book to Jordan Peele's 2017 film 'Get Out'."
		],
		images: {
			desktop: [
				{
					src: "Assets/composites/get-out/desktop/home__01",
					description: "",
					id: "get_out__desktop__landing"
				},{
					src: "Assets/composites/get-out/desktop/home__02",
					description: "",
					id: "get_out__desktop__foreword"
				},{
					src: "Assets/composites/get-out/desktop/home__03",
					description: "",
					id: "get_out__desktop__gallery_1"
				},{
					src: "Assets/composites/get-out/desktop/home__04",
					description: "",
					id: "get_out__desktop__artwork__skull"
				},{
					src: "Assets/composites/get-out/desktop/home__05",
					description: "",
					id: "get_out__desktop__artwork__yellow_teacup"
				},{
					src: "Assets/composites/get-out/desktop/home__06",
					description: "",
					id: "get_out__desktop__artwork__red_waves"
				},{
					src: "Assets/composites/get-out/desktop/home__07",
					description: "",
					id: "get_out__desktop__artwork__gallery_2"
				},{
					src: "Assets/composites/get-out/desktop/home__08",
					description: "",
					id: "get_out__desktop__artwork__teacup_light"
				},{
					src: "Assets/composites/get-out/desktop/home__09",
					description: "",
					id: "get_out__desktop__artwork__thanks"
				}
			],
			tablet: [
				{
					src: "Assets/composites/get-out/tablet/home__01",
					description: "",
					id: "get_out__tablet__landing"
				},{
					src: "Assets/composites/get-out/tablet/home__02",
					description: "",
					id: "get_out__tablet__foreword"
				},{
					src: "Assets/composites/get-out/tablet/home__03",
					description: "",
					id: "get_out__tablet__gallery_1"
				},{
					src: "Assets/composites/get-out/tablet/home__04",
					description: "",
					id: "get_out__tablet__artwork__skull"
				},{
					src: "Assets/composites/get-out/tablet/home__05",
					description: "",
					id: "get_out__tablet__artwork__yellow_teacup"
				},{
					src: "Assets/composites/get-out/tablet/home__06",
					description: "",
					id: "get_out__tablet__artwork__red_waves"
				},{
					src: "Assets/composites/get-out/tablet/home__07",
					description: "",
					id: "get_out__tablet__artwork__gallery_2"
				},{
					src: "Assets/composites/get-out/tablet/home__08",
					description: "",
					id: "get_out__tablet__artwork__teacup_light"
				},{
					src: "Assets/composites/get-out/tablet/home__09",
					description: "",
					id: "get_out__tablet__artwork__thanks"
				}
			],
			mobile: [
				{
					src: "Assets/composites/get-out/mobile/home__01",
					description: "",
					id: "get_out__mobile__landing"
				},{
					src: "Assets/composites/get-out/mobile/home__02",
					description: "",
					id: "get_out__mobile__foreword"
				},{
					src: "Assets/composites/get-out/mobile/home__03",
					description: "",
					id: "get_out__mobile__gallery_1"
				},{
					src: "Assets/composites/get-out/mobile/home__04",
					description: "",
					id: "get_out__mobile__artwork__skull"
				},{
					src: "Assets/composites/get-out/mobile/home__05",
					description: "",
					id: "get_out__mobile__artwork__yellow_teacup"
				},{
					src: "Assets/composites/get-out/mobile/home__06",
					description: "",
					id: "get_out__mobile__artwork__red_waves"
				},{
					src: "Assets/composites/get-out/mobile/home__07",
					description: "",
					id: "get_out__mobile__artwork__gallery_2"
				},{
					src: "Assets/composites/get-out/mobile/home__08",
					description: "",
					id: "get_out__mobile__artwork__teacup_light"
				},{
					src: "Assets/composites/get-out/mobile/home__09",
					description: "",
					id: "get_out__mobile__artwork__thanks"
				}
			],
		},
		pages: [ 
			"Landing",
			"Foreword",
			"Gallery 1",
			"Artwork 1",
			"Artwork 2",
			"Artwork 3",
			"Gallery 2",
			"Artwork 4",
			"Thank you"
		],
		tags: [
			"HTML",
			"CSS3",
			"ES6",
			"Preact"
		],
		articles: [
			lazyLoadEverything
		]
	},{
		title: "Son of Bigfoot",
		safeTitle: "son-of-bigfoot",
		date: "2017-06",
		description: [
			"A facial-recognition-powered AR quiz, in which your face (from webcam or file-upload) becomes more hairy for each question that you answer correctly."
		],
		images: {
			desktop: [
				{
					src: "Assets/composites/son-of-bigfoot/desktop/landing",
					description: "",
					page: "landing",
					id: "son_of_bigfoot__desktop__landing"
				},{
					src: "Assets/composites/son-of-bigfoot/desktop/cta",
					description: "",
					page: "cta",
					id: "son_of_bigfoot__desktop__cta"
				},{
					src: "Assets/composites/son-of-bigfoot/desktop/confirmation",
					description: "",
					page: "confirmation",
					id: "son_of_bigfoot__desktop__confirmation"
				},{
					src: "Assets/composites/son-of-bigfoot/desktop/question",
					description: "",
					page: "question",
					id: "son_of_bigfoot__desktop__question"
				},{
					src: "Assets/composites/son-of-bigfoot/desktop/result",
					description: "",
					page: "result",
					id: "son_of_bigfoot__desktop__result"
				}
			],
			tablet: [
				{
					src: "Assets/composites/son-of-bigfoot/tablet/landing",
					description: "",
					page: "landing",
					id: "son_of_bigfoot__tablet__landing"
				},{
					src: "Assets/composites/son-of-bigfoot/tablet/cta",
					description: "",
					page: "cta",
					id: "son_of_bigfoot__tablet__cta"
				},{
					src: "Assets/composites/son-of-bigfoot/tablet/confirmation",
					description: "",
					page: "confirmation",
					id: "son_of_bigfoot__tablet__confirmation"
				},{
					src: "Assets/composites/son-of-bigfoot/tablet/question",
					description: "",
					page: "question",
					id: "son_of_bigfoot__tablet__question"
				},{
					src: "Assets/composites/son-of-bigfoot/tablet/result",
					description: "",
					page: "result",
					id: "son_of_bigfoot__tablet__result"
				}
			],
			mobile: [
				{
					src: "Assets/composites/son-of-bigfoot/mobile/landing",
					description: "",
					page: "landing",
					id: "son_of_bigfoot__mobile__landing"
				},{
					src: "Assets/composites/son-of-bigfoot/mobile/cta",
					description: "",
					page: "cta",
					id: "son_of_bigfoot__mobile__cta"
				},{
					src: "Assets/composites/son-of-bigfoot/mobile/confirmation",
					description: "",
					page: "confirmation",
					id: "son_of_bigfoot__mobile__confirmation"
				},{
					src: "Assets/composites/son-of-bigfoot/mobile/question",
					description: "",
					page: "question",
					id: "son_of_bigfoot__mobile__question"
				},{
					src: "Assets/composites/son-of-bigfoot/mobile/result",
					description: "",
					page: "result",
					id: "son_of_bigfoot__mobile__result"
				}
			],
		},
		pages: [ 
			"Landing",
			"Prompt",
			"Confirmation",
			"Quiz",
			"Result"
		],
		tags: [
			"HTML",
			"CSS3",
			"ES6",
			"Preact",
			"AR",
			"clmtrackr"
		],
		articles: [
			webARSnapchat
		]
	},{
		title: "Blindspotting",
		safeTitle: "blindspotting",
		date: "2018-07",
		description: [
			"A media-showcase to introduce the characters and artwork from the 2017 film Blindspotting."
		],
		images: {
			desktop: [
				{
					src: "Assets/composites/blindspotting/desktop/home__01",
					description: "",
					id: "blindspotting__desktop__landing"
				},{
					src: "Assets/composites/blindspotting/desktop/home__02",
					description: "",
					id: "blindspotting__desktop__posters"
				},{
					src: "Assets/composites/blindspotting/desktop/home__03",
					description: "",
					id: "blindspotting__desktop__gallery"
				},{
					src: "Assets/composites/blindspotting/desktop/home__04",
					description: "",
					id: "blindspotting__desktop__cards"
				},{
					src: "Assets/composites/blindspotting/desktop/home__05",
					description: "",
					id: "blindspotting__desktop__artwork"
				},{
					src: "Assets/composites/blindspotting/desktop/home__06",
					description: "",
					id: "blindspotting__desktop__trailer"
				}
			],
			tablet: [
				{
					src: "Assets/composites/blindspotting/tablet/home__01",
					description: "",
					id: "blindspotting__tablet__landing"
				},{
					src: "Assets/composites/blindspotting/tablet/home__02",
					description: "",
					id: "blindspotting__tablet__posters"
				},{
					src: "Assets/composites/blindspotting/tablet/home__03",
					description: "",
					id: "blindspotting__tablet__gallery"
				},{
					src: "Assets/composites/blindspotting/tablet/home__04",
					description: "",
					id: "blindspotting__tablet__cards"
				},{
					src: "Assets/composites/blindspotting/tablet/home__05",
					description: "",
					id: "blindspotting__tablet__artwork"
				},{
					src: "Assets/composites/blindspotting/tablet/home__06",
					description: "",
					id: "blindspotting__tablet__trailer"
				}
			],
			mobile: [
				{
					src: "Assets/composites/blindspotting/mobile/home__01",
					description: "",
					id: "blindspotting__mobile__landing"
				},{
					src: "Assets/composites/blindspotting/mobile/home__02",
					description: "",
					id: "blindspotting__mobile__posters"
				},{
					src: "Assets/composites/blindspotting/mobile/home__03",
					description: "",
					id: "blindspotting__mobile__gallery"
				},{
					src: "Assets/composites/blindspotting/mobile/home__04",
					description: "",
					id: "blindspotting__mobile__cards"
				},{
					src: "Assets/composites/blindspotting/mobile/home__05",
					description: "",
					id: "blindspotting__mobile__artwork"
				},{
					src: "Assets/composites/blindspotting/mobile/home__06",
					description: "",
					id: "blindspotting__mobile__trailer"
				}
			],
		},
		pages: [ 
			"Landing",
			"Posters",
			"Gallery",
			"Cards",
			"Artwork",
			"Trailer"
		],
		tags: [
			"HTML",
			"CSS3",
			"ES6",
			"Preact"
		],
		articles: [
			flippingCardsPerspective,
			goldenRatioCSS
		]
	},{
		title: "Hell Fest",
		safeTitle: "hell-fest",
		date: "2018-09",
		description: [
			"A map / exploration-based media site to share clips and stills from the 2018 horror flick: Hell Fest."
		],
		images: {
			desktop: [
				{
					src: "Assets/composites/hell-fest/desktop/map",
					description: "",
					page: "map",
					id: "hell_fest__desktop__map"
				},{
					src: "Assets/composites/hell-fest/desktop/gallery",
					description: "",
					page: "gallery",
					id: "hell_fest__desktop__gallery"
				},{
					src: "Assets/composites/hell-fest/desktop/synopsis",
					description: "",
					page: "synopsis",
					id: "hell_fest__desktop__synopsis"
				},{
					src: "Assets/composites/hell-fest/desktop/cast",
					description: "",
					page: "cast",
					id: "hell_fest__desktop__cast"
				}
			],
			tablet: [
				{
					src: "Assets/composites/hell-fest/tablet/map",
					description: "",
					page: "map",
					id: "hell_fest__tablet__map"
				},{
					src: "Assets/composites/hell-fest/tablet/gallery",
					description: "",
					page: "gallery",
					id: "hell_fest__tablet__gallery"
				},{
					src: "Assets/composites/hell-fest/tablet/synopsis",
					description: "",
					page: "synopsis",
					id: "hell_fest__tablet__synopsis"
				},{
					src: "Assets/composites/hell-fest/tablet/cast",
					description: "",
					page: "cast",
					id: "hell_fest__tablet__cast"
				}
			],
			mobile: [
				{
					src: "Assets/composites/hell-fest/mobile/map",
					description: "",
					page: "map",
					id: "hell_fest__mobile__map"
				},{
					src: "Assets/composites/hell-fest/mobile/gallery",
					description: "",
					page: "gallery",
					id: "hell_fest__mobile__gallery"
				},{
					src: "Assets/composites/hell-fest/mobile/synopsis",
					description: "",
					page: "synopsis",
					id: "hell_fest__mobile__synopsis"
				},{
					src: "Assets/composites/hell-fest/mobile/cast",
					description: "",
					page: "cast",
					id: "hell_fest__mobile__cast"
				}
			],
		},
		pages: [ 
			"Map",
			"Gallery",
			"Synopsis",
			"Cast"
		],
		tags: [
			"HTML",
			"CSS3",
			"ES6",
			"Preact",
			"Gyroscope"
		],
		articles: [
			everydayGyroscopeUses,
			accessibleCodeIsEasier 
		]
	},{
		title: "Life Itself",
		safeTitle: "life-itself",
		date: "2018-09",
		description: [
			"A media-rich promotional site for the 2018 film: Life Itself."
		],
		images: {
			desktop: [
				{
					src: "Assets/composites/life-itself/desktop/landing",
					description: "",
					page: "landing",
					id: "life_itself__desktop__landing"
				},{
					src: "Assets/composites/life-itself/desktop/synopsis",
					description: "",
					page: "synopsis",
					id: "life_itself__desktop__synopsis"
				},{
					src: "Assets/composites/life-itself/desktop/characters",
					description: "",
					page: "characters",
					id: "life_itself__desktop__characters"
				},{
					src: "Assets/composites/life-itself/desktop/posters",
					description: "",
					page: "posters",
					id: "life_itself__desktop__posters"
				},{
					src: "Assets/composites/life-itself/desktop/gallery",
					description: "",
					page: "gallery",
					id: "life_itself__desktop__gallery"
				}
			],
			tablet: [
				{
					src: "Assets/composites/life-itself/tablet/landing",
					description: "",
					page: "landing",
					id: "life_itself__tablet__landing"
				},{
					src: "Assets/composites/life-itself/tablet/synopsis",
					description: "",
					page: "synopsis",
					id: "life_itself__tablet__synopsis"
				},{
					src: "Assets/composites/life-itself/tablet/characters",
					description: "",
					page: "characters",
					id: "life_itself__tablet__characters"
				},{
					src: "Assets/composites/life-itself/tablet/posters",
					description: "",
					page: "posters",
					id: "life_itself__tablet__posters"
				},{
					src: "Assets/composites/life-itself/tablet/gallery",
					description: "",
					page: "gallery",
					id: "life_itself__tablet__gallery"
				}
			],
			mobile: [
				{
					src: "Assets/composites/life-itself/mobile/landing",
					description: "",
					page: "landing",
					id: "life_itself__mobile__landing"
				},{
					src: "Assets/composites/life-itself/mobile/synopsis",
					description: "",
					page: "synopsis",
					id: "life_itself__mobile__synopsis"
				},{
					src: "Assets/composites/life-itself/mobile/characters",
					description: "",
					page: "characters",
					id: "life_itself__mobile__characters"
				},{
					src: "Assets/composites/life-itself/mobile/posters",
					description: "",
					page: "posters",
					id: "life_itself__mobile__posters"
				},{
					src: "Assets/composites/life-itself/mobile/gallery",
					description: "",
					page: "gallery",
					id: "life_itself__mobile__gallery"
				}
			],
		},
		pages: [ 
			"Landing",
			"Synopsis",
			"Characters",
			"Posters",
			"Gallery"
		],
		tags: [
			"HTML",
			"CSS3",
			"ES6",
			"Preact"
		],
		articles: [
			moreInterestingGalleries
		]
	},{
		title: "Fifty Shades Darker",
		safeTitle: "fifty-shades-darker",
		date: "2017-02",
		description: [
			"A desktop-only teaser site for the 2017 film of the same name."
		],
		images: {
			desktop: [
				{
					src: "Assets/composites/fifty-shades-darker/desktop/home__01",
					description: "",
					id: "fifty_shades_darker__desktop__landing"
				},{
					src: "Assets/composites/fifty-shades-darker/desktop/home__02",
					description: "",
					id: "fifty_shades_darker__desktop__clip_1"
				},{
					src: "Assets/composites/fifty-shades-darker/desktop/home__03",
					description: "",
					id: "fifty_shades_darker__desktop__clip_2"
				},{
					src: "Assets/composites/fifty-shades-darker/desktop/home__04",
					description: "",
					id: "fifty_shades_darker__desktop__gallery"
				},{
					src: "Assets/composites/fifty-shades-darker/desktop/home__05",
					description: "",
					id: "fifty_shades_darker__desktop__clip_3"
				},{
					src: "Assets/composites/fifty-shades-darker/desktop/home__06",
					description: "",
					id: "fifty_shades_darker__desktop__tickets"
				}
			]
		},
		pages: [ 
			"Landing",
			"Clip 1",
			"Clip 2",
			"Gallery",
			"Clip 3",
			"Tickets"
		],
		tags: [
			"HTML",
			"CSS3",
			"ES6",
			"Preact"
		],
		articles: [
			cascadingTextEffect,
			intersectionObserverStorytelling
		]
	},{
		title: "The Secret Life of Pets 2",
		safeTitle: "the-secret-life-of-pets-2",
		date: "2018-11",
		description: [
			"A hub-site to reveal characters from SLOP2 and their associated Youtube videos over the course of several months."
		],
		images: {
			desktop: [
				{
					src: "Assets/composites/the-secret-life-of-pets-2/desktop/roof",
					description: "",
					id: "the_secret_life_of_pets_2__desktop__roof"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/desktop/max",
					description: "",
					id: "the_secret_life_of_pets_2__desktop__max"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/desktop/chloe",
					description: "",
					id: "the_secret_life_of_pets_2__desktop__chloe"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/desktop/daisy",
					description: "",
					id: "the_secret_life_of_pets_2__desktop__daisy"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/desktop/snowball",
					description: "",
					id: "the_secret_life_of_pets_2__desktop__snowball"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/desktop/gidget",
					description: "",
					id: "the_secret_life_of_pets_2__desktop__gidget"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/desktop/rooster",
					description: "",
					id: "the_secret_life_of_pets_2__desktop__rooster"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/desktop/shop",
					description: "",
					id: "the_secret_life_of_pets_2__desktop__shop"
				}
			],
			tablet: [
				{
					src: "Assets/composites/the-secret-life-of-pets-2/tablet/roof",
					description: "",
					id: "the_secret_life_of_pets_2__tablet__roof"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/tablet/max",
					description: "",
					id: "the_secret_life_of_pets_2__tablet__max"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/tablet/chloe",
					description: "",
					id: "the_secret_life_of_pets_2__tablet__chloe"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/tablet/daisy",
					description: "",
					id: "the_secret_life_of_pets_2__tablet__daisy"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/tablet/snowball",
					description: "",
					id: "the_secret_life_of_pets_2__tablet__snowball"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/tablet/gidget",
					description: "",
					id: "the_secret_life_of_pets_2__tablet__gidget"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/tablet/rooster",
					description: "",
					id: "the_secret_life_of_pets_2__tablet__rooster"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/tablet/shop",
					description: "",
					id: "the_secret_life_of_pets_2__tablet__shop"
				}
			],
			mobile: [
				{
					src: "Assets/composites/the-secret-life-of-pets-2/mobile/roof",
					description: "",
					id: "the_secret_life_of_pets_2__mobile__roof"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/mobile/max",
					description: "",
					id: "the_secret_life_of_pets_2__mobile__max"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/mobile/chloe",
					description: "",
					id: "the_secret_life_of_pets_2__mobile__chloe"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/mobile/daisy",
					description: "",
					id: "the_secret_life_of_pets_2__mobile__daisy"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/mobile/snowball",
					description: "",
					id: "the_secret_life_of_pets_2__mobile__snowball"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/mobile/gidget",
					description: "",
					id: "the_secret_life_of_pets_2__mobile__gidget"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/mobile/rooster",
					description: "",
					id: "the_secret_life_of_pets_2__mobile__rooster"
				},{
					src: "Assets/composites/the-secret-life-of-pets-2/mobile/shop",
					description: "",
					id: "the_secret_life_of_pets_2__mobile__shop"
				}
			],
		},
		pages: [ 
			"Rooftop",
			"Max",
			"Chloe",
			"Daisy",
			"snowball",
			"Gidget",
			"Rooster"
		],
		tags: [
			"HTML",
			"CSS3",
			"ES6",
			"Preact"
		],
		articles: [
			everydayGyroscopeUses
		]
	}
];