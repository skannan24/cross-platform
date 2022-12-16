import { Injectable } from '@angular/core';
import {Post} from '../models/post';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CrossoverService {

  homeScreenPosts = [
    {
      "id": 1,
      "is_ad": false,
      "like": 311,
      "is_liked": false,
      "comment": [
        {
          "user_id": 100,
          "user_name": "thebrianmead",
          "comment": "beautiful!!!"
        },
        {
          "user_id": 101,
          "user_name": "suma_pavan79",
          "comment": "👏👏👏👏👏💓❤️❤️"
        },
        {
          "user_id": 102,
          "user_name": "fotoprestige6",
          "comment": "great light️"
        }
      ],
      "price": null,
      "category": null,
      "user": {
        "user_id": 103,
        "user_name": "veeruvajrawad",
        "phone_number": 9365960998,
        "is_spam": false,
        "rating": null,
        "earnings": null
      },
      "media_url": "https://leanconnect.s3.amazonaws.com/media/3686_TopPhotosOf2020_JanneLFord.jpeg",
      "media_thumbnail": null,
      "media_type": "image",
      "description": "Watch Sunsets not Netflix!",
      "rating": null,
      "created_date": "Mar 21 2022"
    },
    {
      "id": 2,
      "is_ad": false,
      "like": 311,
      "is_liked": false,
      "comment": [
        {
          "user_id": 100,
          "user_name": "thebrianmead",
          "comment": "beautiful!!!"
        },
        {
          "user_id": 101,
          "user_name": "suma_pavan79",
          "comment": "👏👏👏👏👏💓❤️❤️"
        },
        {
          "user_id": 102,
          "user_name": "fotoprestige6",
          "comment": "great"
        }
      ],
      "price": null,
      "category": null,
      "user": {
        "user_id": 103,
        "user_name": "veeruvajrawad",
        "phone_number": 9365960998,
        "is_spam": false,
        "rating": null,
        "earnings": null
      },
      "media_url": "https://leanconnect.s3.amazonaws.com/media/WhatsApp_Image_2022-04-03_at_1.06.04_PM_1_1648971980.jpeg",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/WhatsApp_Image_2022-04-03_at_1.06.04_PM_1_1648971980.jpeg",
      "media_type": "image",
      "description": "I am inevitable",
      "rating": null,
      "created_date": "Mar 21 2022"
    },
    {
      "id": 3,
      "is_ad": false,
      "like": 50,
      "is_liked": false,
      "comment": [
        {
          "user_id": 101,
          "user_name": "suma_pavan79",
          "comment": "👏👏👏💓❤️❤️"
        },
        {
          "user_id": 102,
          "user_name": "fotoprestige6",
          "comment": "hi️pp"
        }
      ],
      "price": null,
      "category": null,
      "user": {
        "user_id": 1,
        "user_name": "raj",
        "phone_number": 1065960995,
        "is_spam": false,
        "rating": null,
        "earnings": null
      },
      "media_url": "https://leanconnect.s3.amazonaws.com/media/WhatsApp_Image_2022-04-03_at_1.06.04_PM_2.jpeg",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/WhatsApp_Image_2022-04-03_at_1.06.04_PM_2.jpeg",
      "media_type": "image",
      "description": "it is not a sweater, it is not a shirt",
      "rating": null,
      "created_date": "Apr 2 2022"
    },
    {
      "id": 4,
      "is_ad": false,
      "like": 112,
      "is_liked": false,
      "comment": [
        {
          "user_id": 105,
          "user_name": "kavya",
          "comment": "cutie pie️"
        }
      ],
      "price": null,
      "category": null,
      "user": {
        "user_id": 1,
        "user_name": "raj",
        "phone_number": 1065960995,
        "is_spam": false,
        "rating": null,
        "earnings": null
      },
      "media_url": "https://leanconnect.s3.amazonaws.com/media/WhatsApp_Image_2022-04-03_at_1.08.49_PM.jpeg",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/WhatsApp_Image_2022-04-03_at_1.08.49_PM.jpeg",
      "media_type": "image",
      "description": "sleeping mood",
      "rating": null,
      "created_date": "Apr 1 2022"
    },
    {
      "id": 50,
      "is_ad": true,
      "like": 367,
      "is_liked": false,
      "comment": [
        {
          "user_id": 200,
          "user_name": "sundar_damon",
          "comment": "Beautiful ❤️"
        },
        {
          "user_id": 201,
          "user_name": "rajesh",
          "comment": "👏👏🔥️"
        },
        {
          "user_id": 202,
          "user_name": "burhan",
          "comment": "price"
        }
      ],
      "price": 1299,
      "category": "lifestyle",
      "user": {
        "user_id": 203,
        "user_name": "Poplins",
        "phone_number": 9999992348,
        "location": "Madhya Pradesh",
        "is_seller": true,
        "is_spam": false,
        "rating": 4.4,
        "earnings": 20000
      },
      "media_url": "https://bharatagri-android-two.s3.ap-south-1.amazonaws.com/MGUzZGFkM2EtMzBiZC00MzI3LTk4NjUtY2VlMjcxYjI4ZGJkLm1wNA%3D%3D.mp4",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/969d7a9b-2e48-43b5-a3b4-a6dc7ead7567_RJwxk69.jpg",
      "media_type": "video",
      "description": "Men Self Design Lightweight Jacket",
      "rating": 4.3,
      "created_date": "Mar 21 2022"
    },
    {
      "id": 5,
      "is_ad": false,
      "like": 53,
      "is_liked": false,
      "comment": [
        {
          "user_id": 106,
          "user_name": "Ashwini",
          "comment": "nighty night"
        },
        {
          "user_id": 107,
          "user_name": "bhavya",
          "comment": "not yet though"
        }
      ],
      "price": null,
      "category": null,
      "user": {
        "user_id": 2,
        "user_name": "agastya",
        "phone_number": 1065960996,
        "is_spam": false,
        "rating": null,
        "earnings": null
      },
      "media_url": "https://leanconnect.s3.amazonaws.com/media/WhatsApp_Image_2022-04-03_at_1.09.59_PM.jpeg",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/WhatsApp_Image_2022-04-03_at_1.09.59_PM.jpeg",
      "media_type": "image",
      "description": "end of the world",
      "rating": null,
      "created_date": "Apr 2 2021"
    },
    {
      "id": 51,
      "is_ad": true,
      "like": 118,
      "is_liked": false,
      "comment": [
        {
          "user_id": 200,
          "user_name": "sundar_damon",
          "comment": "Beautiful ❤️"
        },
        {
          "user_id": 201,
          "user_name": "rajesh",
          "comment": "👏👏🔥️"
        },
        {
          "user_id": 202,
          "user_name": "burhan",
          "comment": "pp"
        }
      ],
      "price": 999,
      "category": "lifestyle",
      "user": {
        "user_id": 212,
        "user_name": "Urban Monkey",
        "phone_number": 9999999183,
        "location": "Madhya Pradesh",
        "is_seller": true,
        "is_spam": false,
        "rating": 4.2,
        "earnings": 12876
      },
      "media_url": "https://bharatagri-android-two.s3.ap-south-1.amazonaws.com/Wm1VMVkyVTFaR1l0TW1GbE1TMDBOalUyTFdGaFptVXRaVGswT0Rjek9XWmlPREV5TG0xd05BPT0ubXA0.mp4",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/8b02a23c-a1de-490d-bb33-54b9a2051b81.jpg",
      "media_type": "video",
      "description": "Uber cool complete suede premium baseball cap by Urban Monkey",
      "rating": 4,
      "created_date": "Feb 21 2022"
    },
    {
      "id": 6,
      "is_ad": false,
      "like": 31,
      "is_liked": false,
      "comment": [
        {
          "user_id": 108,
          "user_name": "chandrushekar",
          "comment": "👏too fragile❤️"
        },
        {
          "user_id": 109,
          "user_name": "dayanand",
          "comment": "peaceful"
        }
      ],
      "price": null,
      "category": null,
      "user": {
        "user_id": 2,
        "user_name": "agastya",
        "phone_number": 1065960996,
        "is_spam": false,
        "rating": null,
        "earnings": null
      },
      "media_url": "https://leanconnect.s3.amazonaws.com/media/WhatsApp_Image_2022-04-03_at_1.10.39_PM.jpeg",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/WhatsApp_Image_2022-04-03_at_1.10.39_PM.jpeg",
      "media_type": "image",
      "description": "in the jungle the mighty jungle",
      "rating": null,
      "created_date": "Feb 1 2021"
    },
    {
      "id": 7,
      "is_ad": false,
      "like": 1,
      "is_liked": false,
      "comment": [
        {
          "user_id": 110,
          "user_name": "ganashree",
          "comment": "too real to be true"
        },
        {
          "user_id": 111,
          "user_name": "ganesh",
          "comment": "how about a shower there"
        }
      ],
      "price": null,
      "category": null,
      "user": {
        "user_id": 2,
        "user_name": "agastya",
        "phone_number": 1065960996,
        "is_spam": false,
        "rating": null,
        "earnings": null
      },
      "media_url": "https://leanconnect.s3.amazonaws.com/media/WhatsApp_Image_2022-04-03_at_1.10.43_PM.jpeg",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/WhatsApp_Image_2022-04-03_at_1.10.43_PM.jpeg",
      "media_type": "image",
      "description": "the fall",
      "rating": null,
      "created_date": "Jan 15 2022"
    },
    {
      "id": 52,
      "is_ad": true,
      "like": 289,
      "is_liked": false,
      "comment": [
        {
          "user_id": 202,
          "user_name": "burhan",
          "comment": "please book my order️"
        },
        {
          "user_id": 200,
          "user_name": "sundar_damon",
          "comment": "Price️"
        },
        {
          "user_id": 201,
          "user_name": "rajesh",
          "comment": "226016 is not delivered"
        }
      ],
      "price": 499,
      "category": "lifestyle",
      "user": {
        "user_id": 207,
        "user_name": "fabelle",
        "phone_number": 9999991234,
        "location": "Madhya Pradesh",
        "is_seller": true,
        "is_spam": false,
        "rating": 3.9,
        "earnings": 34998
      },
      "media_url": "https://bharatagri-android-two.s3.ap-south-1.amazonaws.com/OThhMjk1N2ItYmFmYi00NWVkLWIzZmUtM2E4NGFkMWQ5NDJmLm1wNA%3D%3D.mp4",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/a931690b-9daa-4632-a7dc-50c837ebe91e.jpg",
      "media_type": "video",
      "description": "Damage Control Keratin Hair Serum with Jatamansi & Almond",
      "rating": 4.7,
      "created_date": "Jan 15 2022"
    },
    {
      "id": 8,
      "is_ad": false,
      "like": 1,
      "is_liked": false,
      "comment": [
        {
          "user_id": 112,
          "user_name": "himanshu",
          "comment": "booo"
        }
      ],
      "price": null,
      "category": null,
      "user": {
        "user_id": 3,
        "user_name": "arya",
        "phone_number": 1065960997,
        "is_spam": false,
        "rating": null,
        "earnings": null
      },
      "media_url": "https://leanconnect.s3.amazonaws.com/media/WhatsApp_Image_2022-04-03_at_1.11.21_PM.jpeg",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/WhatsApp_Image_2022-04-03_at_1.11.21_PM.jpeg",
      "media_type": "image",
      "description": "chupa rustom",
      "rating": null,
      "created_date": "Apr 2 2022"
    },
    {
      "id": 9,
      "is_ad": false,
      "like": 3,
      "is_liked": false,
      "comment": [
        {
          "user_id": 113,
          "user_name": "janhavi",
          "comment": "from the top."
        }
      ],
      "price": null,
      "category": null,
      "user": {
        "user_id": 3,
        "user_name": "arya",
        "phone_number": 1065960997,
        "is_spam": false,
        "rating": null,
        "earnings": null
      },
      "media_url": "https://leanconnect.s3.amazonaws.com/media/WhatsApp_Image_2022-04-03_at_1.11.46_PM.jpeg",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/WhatsApp_Image_2022-04-03_at_1.11.46_PM.jpeg",
      "media_type": "image",
      "description": "Goaaaa",
      "rating": null,
      "created_date": "Apr 2 2022"
    },
    {
      "id": 10,
      "is_ad": false,
      "like": 5,
      "is_liked": false,
      "comment": [
        {
          "user_id": 114,
          "user_name": "kavya",
          "comment": "yes it is"
        }
      ],
      "price": null,
      "category": null,
      "user": {
        "user_id": 3,
        "user_name": "arya",
        "phone_number": 1065960997,
        "is_spam": false,
        "rating": null,
        "earnings": null
      },
      "media_url": "https://leanconnect.s3.amazonaws.com/media/WhatsApp_Image_2022-04-03_at_1.13.03_PM.jpeg",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/WhatsApp_Image_2022-04-03_at_1.13.03_PM.jpeg",
      "media_type": "image",
      "description": "peace",
      "rating": null,
      "created_date": "Mar 2 2022"
    },
    {
      "id": 53,
      "is_ad": true,
      "like": 258,
      "is_liked": false,
      "comment": [
        {
          "user_id": 200,
          "user_name": "sundar_damon",
          "comment": "Beautiful ❤️"
        },
        {
          "user_id": 201,
          "user_name": "rajesh",
          "comment": "👏👏🔥️"
        },
        {
          "user_id": 202,
          "user_name": "burhan",
          "comment": "pp"
        }
      ],
      "price": 159,
      "category": "lifestyle",
      "user": {
        "user_id": 212,
        "user_name": "Urban Monkey",
        "phone_number": 9999999183,
        "location": "Madhya Pradesh",
        "is_seller": true,
        "is_spam": false,
        "rating": 4.2,
        "earnings": 12876
      },
      "media_url": "https://bharatagri-android-two.s3.ap-south-1.amazonaws.com/ZDhmNTFiMzctZjg5Zi00NzUzLThlOTktOTM3OWFhODY4NDNlLm1wNA%3D%3D.mp4",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/b21205e8-b82c-4b42-8f7f-264351c81cf2_yhV12mv.jpg",
      "media_type": "video",
      "description": "Adults Reusable 3-Layer Outdoor Masks",
      "rating": 4,
      "created_date": "Feb 21 2022"
    },
    {
      "id": 11,
      "is_ad": false,
      "like": 1,
      "is_liked": false,
      "comment": [
        {
          "user_id": 115,
          "user_name": "kunal",
          "comment": "edible"
        }
      ],
      "price": null,
      "category": null,
      "user": {
        "user_id": 3,
        "user_name": "arya",
        "phone_number": 1065960997,
        "is_spam": false,
        "rating": null,
        "earnings": null
      },
      "media_url": "https://leanconnect.s3.amazonaws.com/media/WhatsApp_Image_2022-04-03_at_1.14.09_PM.jpeg",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/WhatsApp_Image_2022-04-03_at_1.14.09_PM.jpeg",
      "media_type": "image",
      "description": "flower thara fire",
      "rating": null,
      "created_date": "Apr 2 2022"
    },
    {
      "id": 12,
      "is_ad": false,
      "like": 50,
      "is_liked": false,
      "comment": [
        {
          "user_id": 116,
          "user_name": "manasa",
          "comment": "beautyyy"
        }
      ],
      "price": null,
      "category": null,
      "user": {
        "user_id": 2,
        "user_name": "agastya",
        "phone_number": 1065960996,
        "is_spam": false,
        "rating": null,
        "earnings": null
      },
      "media_url": "https://leanconnect.s3.amazonaws.com/media/WhatsApp_Image_2022-04-03_at_1.14.42_PM_1648972696.jpeg",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/WhatsApp_Image_2022-04-03_at_1.14.42_PM_1648972696.jpeg",
      "media_type": "image",
      "description": "peacock",
      "rating": null,
      "created_date": "Jan 23 2022"
    },
    {
      "id": 13,
      "is_ad": false,
      "like": 100,
      "is_liked": false,
      "comment": [
        {
          "user_id": 117,
          "user_name": "meghana",
          "comment": "roarrrrr"
        }
      ],
      "price": null,
      "category": null,
      "user": {
        "user_id": 4,
        "user_name": "rocky",
        "phone_number": 1065960998,
        "is_spam": false,
        "rating": null,
        "earnings": null
      },
      "media_url": "https://leanconnect.s3.amazonaws.com/media/WhatsApp_Image_2022-04-03_at_1.15.50_PM.jpeg",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/WhatsApp_Image_2022-04-03_at_1.15.50_PM.jpeg",
      "media_type": "image",
      "description": "the not so good guy",
      "rating": null,
      "created_date": "May 17 2021"
    },
    {
      "id": 54,
      "is_ad": true,
      "like": 312,
      "is_liked": false,
      "comment": [
        {
          "user_id": 210,
          "user_name": "arpana_keerthi",
          "comment": "Beautiful ❤️"
        },
        {
          "user_id": 201,
          "user_name": "rajesh",
          "comment": "👏👏🔥️"
        },
        {
          "user_id": 202,
          "user_name": "burhan",
          "comment": "pp"
        }
      ],
      "price": 1599,
      "category": "lifestyle",
      "user": {
        "user_id": 213,
        "user_name": "Archies",
        "phone_number": 9999992390,
        "location": "Madhya Pradesh",
        "is_seller": true,
        "is_spam": false,
        "rating": 4,
        "earnings": 15000
      },
      "media_url": "https://bharatagri-android-two.s3.ap-south-1.amazonaws.com/ZjUyMjJkOWQtNzk4ZC00NDIxLWI4MDUtNzEzOWEzYTk4NzQ1Lm1wNA%3D%3D.mp4",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/b6ea6663-c12d-4b17-8d8f-0b73d6de6574_30wRlHK.jpg",
      "media_type": "video",
      "description": "Unisex Blue Storm M Smart Watch",
      "rating": 4.1,
      "created_date": "Dec 21 2021"
    },
    {
      "id": 55,
      "is_ad": true,
      "like": 118,
      "is_liked": false,
      "comment": [
        {
          "user_id": 200,
          "user_name": "sundar_damon",
          "comment": "Beautiful ❤️"
        },
        {
          "user_id": 201,
          "user_name": "rajesh",
          "comment": "👏👏🔥️"
        },
        {
          "user_id": 202,
          "user_name": "burhan",
          "comment": "price"
        }
      ],
      "price": 1299,
      "category": "lifestyle",
      "user": {
        "user_id": 203,
        "user_name": "Poplins",
        "phone_number": 9999992348,
        "location": "Madhya Pradesh",
        "is_seller": true,
        "is_spam": false,
        "rating": 4.4,
        "earnings": 20000
      },
      "media_url": "https://bharatagri-android-two.s3.ap-south-1.amazonaws.com/Wm1VMVkyVTFaR1l0TW1GbE1TMDBOalUyTFdGaFptVXRaVGswT0Rjek9XWmlPREV5TG0xd05BPT0ubXA0.mp4",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/8b02a23c-a1de-490d-bb33-54b9a2051b81.jpg",
      "media_type": "video",
      "description": "UV Protected Lens Sunglasses",
      "rating": 4.3,
      "created_date": "Mar 21 2022"
    },
    {
      "id": 14,
      "is_ad": false,
      "like": 393,
      "is_liked": false,
      "comment": [
        {
          "user_id": 118,
          "user_name": "nethravathi",
          "comment": "amazing👏💓❤️❤️"
        }
      ],
      "price": null,
      "category": null,
      "user": {
        "user_id": 4,
        "user_name": "rocky",
        "phone_number": 1065960998,
        "is_spam": false,
        "rating": null,
        "earnings": null
      },
      "media_url": "https://leanconnect.s3.amazonaws.com/media/WhatsApp_Image_2022-04-03_at_1.16.08_PM.jpeg",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/WhatsApp_Image_2022-04-03_at_1.16.08_PM.jpeg",
      "media_type": "image",
      "description": "black fury",
      "rating": null,
      "created_date": "Apr 2 2022"
    },
    {
      "id": 56,
      "is_ad": true,
      "like": 58,
      "is_liked": false,
      "comment": [
        {
          "user_id": 202,
          "user_name": "burhan",
          "comment": "please book my order️"
        },
        {
          "user_id": 200,
          "user_name": "sundar_damon",
          "comment": "Price️"
        },
        {
          "user_id": 201,
          "user_name": "rajesh",
          "comment": "226016 is not delivered"
        }
      ],
      "price": 499,
      "category": "food",
      "user": {
        "user_id": 207,
        "user_name": "fabelle",
        "phone_number": 9999991234,
        "location": "Madhya Pradesh",
        "is_seller": true,
        "is_spam": false,
        "rating": 3.9,
        "earnings": 34998
      },
      "media_url": "https://bharatagri-android-two.s3.ap-south-1.amazonaws.com/TmpFMFpqQXpNVE10Tm1JMlppMDBNV00wTFRobFlqWXRZek15WkRNek9XSTBaVFppTG0xd05BPT0ubXA0.mp4",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/a931690b-9daa-4632-a7dc-50c837ebe91e.jpg",
      "media_type": "video",
      "description": "This Holi, indulge in lavish mousse filled Fabelle Chocolate Bars topped with delectable nuts and berries.",
      "rating": 3.9,
      "created_date": "Jan 15 2022"
    },
    {
      "id": 15,
      "is_ad": false,
      "like": 45,
      "is_liked": false,
      "comment": [
        {
          "user_id": 119,
          "user_name": "nithin gowda",
          "comment": "hi️pp"
        }
      ],
      "price": null,
      "category": null,
      "user": {
        "user_id": 4,
        "user_name": "rocky",
        "phone_number": 1065960998,
        "is_spam": false,
        "rating": null,
        "earnings": null
      },
      "media_url": "https://leanconnect.s3.amazonaws.com/media/WhatsApp_Image_2022-04-03_at_1.16.45_PM.jpeg",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/WhatsApp_Image_2022-04-03_at_1.16.45_PM.jpeg",
      "media_type": "image",
      "description": "the good guy",
      "rating": null,
      "created_date": "Apr 2 2022"
    },
    {
      "id": 57,
      "is_ad": true,
      "like": 118,
      "is_liked": false,
      "comment": [
        {
          "user_id": 210,
          "user_name": "arpana_keerthi",
          "comment": "Beautiful ❤️"
        },
        {
          "user_id": 201,
          "user_name": "rajesh",
          "comment": "👏👏🔥️"
        },
        {
          "user_id": 202,
          "user_name": "burhan",
          "comment": "pp"
        }
      ],
      "price": 399,
      "category": "lifestyle",
      "user": {
        "user_id": 213,
        "user_name": "Archies",
        "phone_number": 9999992390,
        "location": "Madhya Pradesh",
        "is_seller": true,
        "is_spam": false,
        "rating": 4,
        "earnings": 15000
      },
      "media_url": "https://bharatagri-android-two.s3.ap-south-1.amazonaws.com/ZTkyZDI1NWEtNjA2MC00NTQyLWIyYzYtZWJlMDBjNjhiMjBjLm1wNA%3D%3D.mp4",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/8b02a23c-a1de-490d-bb33-54b9a2051b81.jpg",
      "media_type": "video",
      "description": "Printed Stainless Steel Sipper Water Bottle",
      "rating": 4.7,
      "created_date": "Dec 21 2021"
    },
    {
      "id": 16,
      "is_ad": false,
      "like": 50,
      "is_liked": false,
      "comment": [],
      "price": null,
      "category": null,
      "user": {
        "user_id": 4,
        "user_name": "rocky",
        "phone_number": 1065960998,
        "is_spam": false,
        "rating": null,
        "earnings": null
      },
      "media_url": "https://leanconnect.s3.amazonaws.com/media/RE-Scrambler-1.jpeg",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/RE-Scrambler-1.jpeg",
      "media_type": "image",
      "description": "scram",
      "rating": null,
      "created_date": "Feb 25 2022"
    }
  ];

  shopPosts = [
    {
      "id": 50,
      "is_ad": true,
      "like": 367,
      "is_liked": false,
      "comment": [
        {
          "user_id": 200,
          "user_name": "sundar_damon",
          "comment": "Beautiful ❤️"
        },
        {
          "user_id": 201,
          "user_name": "rajesh",
          "comment": "👏👏🔥️"
        },
        {
          "user_id": 202,
          "user_name": "burhan",
          "comment": "price"
        }
      ],
      "price": 1299,
      "category": "lifestyle",
      "user": {
        "user_id": 203,
        "user_name": "Poplins",
        "phone_number": 9999992348,
        "location": "Madhya Pradesh",
        "is_seller": true,
        "is_spam": false,
        "rating": 4.4,
        "earnings": 20000
      },
      "media_url": "https://bharatagri-android-two.s3.ap-south-1.amazonaws.com/MGUzZGFkM2EtMzBiZC00MzI3LTk4NjUtY2VlMjcxYjI4ZGJkLm1wNA%3D%3D.mp4",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/969d7a9b-2e48-43b5-a3b4-a6dc7ead7567_RJwxk69.jpg",
      "media_type": "video",
      "description": "Men Self Design Lightweight Jacket",
      "rating": 4.3,
      "created_date": "Mar 21 2022"
    },
    {
      "id": 52,
      "is_ad": true,
      "like": 289,
      "is_liked": false,
      "comment": [
        {
          "user_id": 202,
          "user_name": "burhan",
          "comment": "please book my order️"
        },
        {
          "user_id": 200,
          "user_name": "sundar_damon",
          "comment": "Price️"
        },
        {
          "user_id": 201,
          "user_name": "rajesh",
          "comment": "226016 is not delivered"
        }
      ],
      "price": 499,
      "category": "lifestyle",
      "user": {
        "user_id": 207,
        "user_name": "fabelle",
        "phone_number": 9999991234,
        "location": "Madhya Pradesh",
        "is_seller": true,
        "is_spam": false,
        "rating": 3.9,
        "earnings": 34998
      },
      "media_url": "https://bharatagri-android-two.s3.ap-south-1.amazonaws.com/OThhMjk1N2ItYmFmYi00NWVkLWIzZmUtM2E4NGFkMWQ5NDJmLm1wNA%3D%3D.mp4",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/a931690b-9daa-4632-a7dc-50c837ebe91e.jpg",
      "media_type": "video",
      "description": "Damage Control Keratin Hair Serum with Jatamansi & Almond",
      "rating": 4.7,
      "created_date": "Jan 15 2022"
    },
    {
      "id": 53,
      "is_ad": true,
      "like": 258,
      "is_liked": false,
      "comment": [
        {
          "user_id": 200,
          "user_name": "sundar_damon",
          "comment": "Beautiful ❤️"
        },
        {
          "user_id": 201,
          "user_name": "rajesh",
          "comment": "👏👏🔥️"
        },
        {
          "user_id": 202,
          "user_name": "burhan",
          "comment": "pp"
        }
      ],
      "price": 159,
      "category": "lifestyle",
      "user": {
        "user_id": 212,
        "user_name": "Urban Monkey",
        "phone_number": 9999999183,
        "location": "Madhya Pradesh",
        "is_seller": true,
        "is_spam": false,
        "rating": 4.2,
        "earnings": 12876
      },
      "media_url": "https://bharatagri-android-two.s3.ap-south-1.amazonaws.com/ZDhmNTFiMzctZjg5Zi00NzUzLThlOTktOTM3OWFhODY4NDNlLm1wNA%3D%3D.mp4",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/b21205e8-b82c-4b42-8f7f-264351c81cf2_yhV12mv.jpg",
      "media_type": "video",
      "description": "Adults Reusable 3-Layer Outdoor Masks",
      "rating": 4,
      "created_date": "Feb 21 2022"
    },
    {
      "id": 54,
      "is_ad": true,
      "like": 312,
      "is_liked": false,
      "comment": [
        {
          "user_id": 210,
          "user_name": "arpana_keerthi",
          "comment": "Beautiful ❤️"
        },
        {
          "user_id": 201,
          "user_name": "rajesh",
          "comment": "👏👏🔥️"
        },
        {
          "user_id": 202,
          "user_name": "burhan",
          "comment": "pp"
        }
      ],
      "price": 1599,
      "category": "lifestyle",
      "user": {
        "user_id": 213,
        "user_name": "Archies",
        "phone_number": 9999992390,
        "location": "Madhya Pradesh",
        "is_seller": true,
        "is_spam": false,
        "rating": 4,
        "earnings": 15000
      },
      "media_url": "https://bharatagri-android-two.s3.ap-south-1.amazonaws.com/ZjUyMjJkOWQtNzk4ZC00NDIxLWI4MDUtNzEzOWEzYTk4NzQ1Lm1wNA%3D%3D.mp4",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/b6ea6663-c12d-4b17-8d8f-0b73d6de6574_30wRlHK.jpg",
      "media_type": "video",
      "description": "Unisex Blue Storm M Smart Watch",
      "rating": 4.1,
      "created_date": "Dec 21 2021"
    },
    {
      "id": 55,
      "is_ad": true,
      "like": 118,
      "is_liked": false,
      "comment": [
        {
          "user_id": 200,
          "user_name": "sundar_damon",
          "comment": "Beautiful ❤️"
        },
        {
          "user_id": 201,
          "user_name": "rajesh",
          "comment": "👏👏🔥️"
        },
        {
          "user_id": 202,
          "user_name": "burhan",
          "comment": "price"
        }
      ],
      "price": 1299,
      "category": "lifestyle",
      "user": {
        "user_id": 203,
        "user_name": "Poplins",
        "phone_number": 9999992348,
        "location": "Madhya Pradesh",
        "is_seller": true,
        "is_spam": false,
        "rating": 4.4,
        "earnings": 20000
      },
      "media_url": "https://bharatagri-android-two.s3.ap-south-1.amazonaws.com/Wm1VMVkyVTFaR1l0TW1GbE1TMDBOalUyTFdGaFptVXRaVGswT0Rjek9XWmlPREV5TG0xd05BPT0ubXA0.mp4",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/8b02a23c-a1de-490d-bb33-54b9a2051b81.jpg",
      "media_type": "video",
      "description": "UV Protected Lens Sunglasses",
      "rating": 4.3,
      "created_date": "Mar 21 2022"
    },
    {
      "id": 56,
      "is_ad": true,
      "like": 58,
      "is_liked": false,
      "comment": [
        {
          "user_id": 202,
          "user_name": "burhan",
          "comment": "please book my order️"
        },
        {
          "user_id": 200,
          "user_name": "sundar_damon",
          "comment": "Price️"
        },
        {
          "user_id": 201,
          "user_name": "rajesh",
          "comment": "226016 is not delivered"
        }
      ],
      "price": 499,
      "category": "food",
      "user": {
        "user_id": 207,
        "user_name": "fabelle",
        "phone_number": 9999991234,
        "location": "Madhya Pradesh",
        "is_seller": true,
        "is_spam": false,
        "rating": 3.9,
        "earnings": 34998
      },
      "media_url": "https://bharatagri-android-two.s3.ap-south-1.amazonaws.com/TmpFMFpqQXpNVE10Tm1JMlppMDBNV00wTFRobFlqWXRZek15WkRNek9XSTBaVFppTG0xd05BPT0ubXA0.mp4",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/a931690b-9daa-4632-a7dc-50c837ebe91e.jpg",
      "media_type": "video",
      "description": "This Holi, indulge in lavish mousse filled Fabelle Chocolate Bars topped with delectable nuts and berries.",
      "rating": 3.9,
      "created_date": "Jan 15 2022"
    },
    {
      "id": 51,
      "is_ad": true,
      "like": 118,
      "is_liked": false,
      "comment": [
        {
          "user_id": 200,
          "user_name": "sundar_damon",
          "comment": "Beautiful ❤️"
        },
        {
          "user_id": 201,
          "user_name": "rajesh",
          "comment": "👏👏🔥️"
        },
        {
          "user_id": 202,
          "user_name": "burhan",
          "comment": "pp"
        }
      ],
      "price": 999,
      "category": "lifestyle",
      "user": {
        "user_id": 212,
        "user_name": "Urban Monkey",
        "phone_number": 9999999183,
        "location": "Madhya Pradesh",
        "is_seller": true,
        "is_spam": false,
        "rating": 4.2,
        "earnings": 12876
      },
      "media_url": "https://bharatagri-android-two.s3.ap-south-1.amazonaws.com/Wm1VMVkyVTFaR1l0TW1GbE1TMDBOalUyTFdGaFptVXRaVGswT0Rjek9XWmlPREV5TG0xd05BPT0ubXA0.mp4",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/8b02a23c-a1de-490d-bb33-54b9a2051b81.jpg",
      "media_type": "video",
      "description": "Uber cool complete suede premium baseball cap by Urban Monkey",
      "rating": 4,
      "created_date": "Feb 21 2022"
    },
    {
      "id": 57,
      "is_ad": true,
      "like": 118,
      "is_liked": false,
      "comment": [
        {
          "user_id": 210,
          "user_name": "arpana_keerthi",
          "comment": "Beautiful ❤️"
        },
        {
          "user_id": 201,
          "user_name": "rajesh",
          "comment": "👏👏🔥️"
        },
        {
          "user_id": 202,
          "user_name": "burhan",
          "comment": "pp"
        }
      ],
      "price": 399,
      "category": "lifestyle",
      "user": {
        "user_id": 213,
        "user_name": "Archies",
        "phone_number": 9999992390,
        "location": "Madhya Pradesh",
        "is_seller": true,
        "is_spam": false,
        "rating": 4,
        "earnings": 15000
      },
      "media_url": "https://bharatagri-android-two.s3.ap-south-1.amazonaws.com/ZTkyZDI1NWEtNjA2MC00NTQyLWIyYzYtZWJlMDBjNjhiMjBjLm1wNA%3D%3D.mp4",
      "media_thumbnail": "https://leanconnect.s3.amazonaws.com/media/8b02a23c-a1de-490d-bb33-54b9a2051b81.jpg",
      "media_type": "video",
      "description": "Printed Stainless Steel Sipper Water Bottle",
      "rating": 4.7,
      "created_date": "Dec 21 2021"
    }
  ];

  constructor() { }

  getHomeScreenPosts(): Post[] {
    return this.homeScreenPosts;
  }

  getPosts(): Post[] {
    return [
      {
        'is_ad': false,
        'like': 118,
        'comment': [
          {
            'user_id': 200,
            'user_name': 'noirmango_',
            'comment': 'Beautiful ❤️'
          },
          {
            'user_id': 201,
            'user_name': 'leon__couture',
            'comment': '👏👏🔥️'
          },
          {
            'user_id': 202,
            'user_name': 'fotoprestige6',
            'comment': 'pp'
          }
        ],
        'price': 1299,
        'category': 'lifestyle',
        'user': {
          'user_id': 203,
          'user_name': 'Poplins'
        },
        'media_url': 'https://www.youtube.com/watch?v=zfgNDULi-U8&feature=youtu.be',
        'media_thumbnail': 'https://leanconnect.s3.amazonaws.com/media/8b02a23c-a1de-490d-bb33-54b9a2051b81.jpg',
        'media_type': 'video',
        'description': 'UV Protected Lens Sunglasses',
        'rating': 4.3,
        'created_date': 'Mar 21 2022'
      },
      {
        'is_ad': false,
        'like': 118,
        'comment': [
          {
            'user_id': 200,
            'user_name': 'noirmango_',
            'comment': 'Beautiful ❤️'
          },
          {
            'user_id': 201,
            'user_name': 'leon__couture',
            'comment': '👏👏🔥️'
          },
          {
            'user_id': 202,
            'user_name': 'fotoprestige6',
            'comment': 'pp'
          }
        ],
        'price': 1299,
        'category': 'lifestyle',
        'user': {
          'user_id': 203,
          'user_name': 'Poplins'
        },
        'media_url': 'https://www.youtube.com/watch?v=zfgNDULi-U8&feature=youtu.be',
        'media_thumbnail': 'https://leanconnect.s3.amazonaws.com/media/8b02a23c-a1de-490d-bb33-54b9a2051b81.jpg',
        'media_type': 'video',
        'description': 'UV Protected Lens Sunglasses',
        'rating': 4.3,
        'created_date': 'Mar 21 2022'
      },
      {
        'is_ad': false,
        'like': 118,
        'comment': [
          {
            'user_id': 200,
            'user_name': 'noirmango_',
            'comment': 'Beautiful ❤️'
          },
          {
            'user_id': 201,
            'user_name': 'leon__couture',
            'comment': '👏👏🔥️'
          },
          {
            'user_id': 202,
            'user_name': 'fotoprestige6',
            'comment': 'pp'
          }
        ],
        'price': 1299,
        'category': 'lifestyle',
        'user': {
          'user_id': 203,
          'user_name': 'Poplins'
        },
        'media_url': 'https://www.youtube.com/watch?v=zfgNDULi-U8&feature=youtu.be',
        'media_thumbnail': 'https://leanconnect.s3.amazonaws.com/media/8b02a23c-a1de-490d-bb33-54b9a2051b81.jpg',
        'media_type': 'video',
        'description': 'UV Protected Lens Sunglasses',
        'rating': 4.3,
        'created_date': 'Mar 21 2022'
      },
      {
        'is_ad': false,
        'like': 118,
        'comment': [
          {
            'user_id': 200,
            'user_name': 'noirmango_',
            'comment': 'Beautiful ❤️'
          },
          {
            'user_id': 201,
            'user_name': 'leon__couture',
            'comment': '👏👏🔥️'
          },
          {
            'user_id': 202,
            'user_name': 'fotoprestige6',
            'comment': 'pp'
          }
        ],
        'price': 1299,
        'category': 'lifestyle',
        'user': {
          'user_id': 203,
          'user_name': 'Poplins'
        },
        'media_url': 'https://www.youtube.com/watch?v=zfgNDULi-U8&feature=youtu.be',
        'media_thumbnail': 'https://leanconnect.s3.amazonaws.com/media/8b02a23c-a1de-490d-bb33-54b9a2051b81.jpg',
        'media_type': 'video',
        'description': 'UV Protected Lens Sunglasses',
        'rating': 4.3,
        'created_date': 'Mar 21 2022'
      }
    ];
  }

  getShopPosts(): Post[] {
    return this.shopPosts;
  }

  getUser(): User {
    return {
      'name': 'sundar_damon',
      'id' : 200,
      'phone_number': 9999992345,
      'location': 'Maharashtra',
      'is_seller': false,
      'is_spam': false,
      'rating': null,
      'earnings' : null,
    }
  }
}
