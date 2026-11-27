// Sample hotel records for the StayEase academic frontend demo.
// Names, ratings, room counts, amenities and prices are illustrative, not live hotel inventory.
const hotels = [
  {
    "id": 1,
    "name": "Central Delhi Residency",
    "location": "Delhi",
    "region": "North India",
    "price": 4200,
    "rating": 4.1,
    "rooms": 8,
    "image": "image-1",
    "amenities": [
      "Wi-Fi",
      "Breakfast",
      "Parking",
      "AC",
      "Restaurant"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 4200,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 5400,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 7000,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample north india stay in Delhi, designed for comfortable city breaks and business visits."
  },
  {
    "id": 2,
    "name": "Cityscape Delhi Lodge",
    "location": "Delhi",
    "region": "North India",
    "price": 5100,
    "rating": 4.2,
    "rooms": 13,
    "image": "image-2",
    "amenities": [
      "Wi-Fi",
      "Breakfast",
      "Parking",
      "AC",
      "Laundry"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 5100,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 6300,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 7900,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample north india stay in Delhi, designed for comfortable city breaks and business visits."
  },
  {
    "id": 3,
    "name": "Garden Mumbai Retreat",
    "location": "Mumbai",
    "region": "West India",
    "price": 5850,
    "rating": 4.2,
    "rooms": 11,
    "image": "image-3",
    "amenities": [
      "Wi-Fi",
      "Pool",
      "Breakfast",
      "Parking",
      "Spa",
      "Restaurant"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 5850,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 7050,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 8650,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample west india stay in Mumbai, designed for comfortable city breaks and business visits."
  },
  {
    "id": 4,
    "name": "Palm Court Mumbai Stay",
    "location": "Mumbai",
    "region": "West India",
    "price": 6750,
    "rating": 4.3,
    "rooms": 16,
    "image": "image-4",
    "amenities": [
      "Wi-Fi",
      "Pool",
      "Breakfast",
      "Restaurant",
      "Gym"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 6750,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 7950,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 9550,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample west india stay in Mumbai, designed for comfortable city breaks and business visits."
  },
  {
    "id": 5,
    "name": "Metro Bengaluru Suites",
    "location": "Bengaluru",
    "region": "South India",
    "price": 4800,
    "rating": 4.3,
    "rooms": 14,
    "image": "image-5",
    "amenities": [
      "Wi-Fi",
      "Breakfast",
      "Gym",
      "AC",
      "Work Desk",
      "Laundry"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 4800,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 6000,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 7600,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample south india stay in Bengaluru, designed for comfortable city breaks and business visits."
  },
  {
    "id": 6,
    "name": "Cedar Bengaluru Grand",
    "location": "Bengaluru",
    "region": "South India",
    "price": 5700,
    "rating": 4.4,
    "rooms": 19,
    "image": "image-6",
    "amenities": [
      "Wi-Fi",
      "Breakfast",
      "Parking",
      "Work Desk",
      "AC"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 5700,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 6900,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 8500,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample south india stay in Bengaluru, designed for comfortable city breaks and business visits."
  },
  {
    "id": 7,
    "name": "Heritage Hyderabad House",
    "location": "Hyderabad",
    "region": "South India",
    "price": 3900,
    "rating": 4.4,
    "rooms": 17,
    "image": "image-1",
    "amenities": [
      "Wi-Fi",
      "Breakfast",
      "Restaurant",
      "Parking",
      "Spa"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 3900,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 5100,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 6700,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample south india stay in Hyderabad, designed for comfortable city breaks and business visits."
  },
  {
    "id": 8,
    "name": "Sunrise Hyderabad Residency",
    "location": "Hyderabad",
    "region": "South India",
    "price": 4800,
    "rating": 4.5,
    "rooms": 22,
    "image": "image-2",
    "amenities": [
      "Wi-Fi",
      "Breakfast",
      "Restaurant",
      "Laundry",
      "Airport Shuttle"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 4800,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 6000,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 7600,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample south india stay in Hyderabad, designed for comfortable city breaks and business visits."
  },
  {
    "id": 9,
    "name": "Lakeview Chennai Hotel",
    "location": "Chennai",
    "region": "South India",
    "price": 3850,
    "rating": 4.5,
    "rooms": 20,
    "image": "image-3",
    "amenities": [
      "Wi-Fi",
      "Pool",
      "Breakfast",
      "Parking",
      "AC",
      "Airport Shuttle"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 3850,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 5050,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 6650,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample south india stay in Chennai, designed for comfortable city breaks and business visits."
  },
  {
    "id": 10,
    "name": "Bluebird Chennai Suites",
    "location": "Chennai",
    "region": "South India",
    "price": 4750,
    "rating": 4.6,
    "rooms": 25,
    "image": "image-4",
    "amenities": [
      "Wi-Fi",
      "Pool",
      "Breakfast",
      "Spa",
      "Parking"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 4750,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 5950,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 7550,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample south india stay in Chennai, designed for comfortable city breaks and business visits."
  },
  {
    "id": 11,
    "name": "Central Kolkata Residency",
    "location": "Kolkata",
    "region": "East India",
    "price": 3700,
    "rating": 4.6,
    "rooms": 23,
    "image": "image-5",
    "amenities": [
      "Wi-Fi",
      "Breakfast",
      "Parking",
      "AC",
      "Restaurant"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 3700,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 4900,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 6500,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample east india stay in Kolkata, designed for comfortable city breaks and business visits."
  },
  {
    "id": 12,
    "name": "Cityscape Kolkata Lodge",
    "location": "Kolkata",
    "region": "East India",
    "price": 4600,
    "rating": 4.7,
    "rooms": 28,
    "image": "image-6",
    "amenities": [
      "Wi-Fi",
      "Breakfast",
      "Parking",
      "AC",
      "Laundry"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 4600,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 5800,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 7400,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample east india stay in Kolkata, designed for comfortable city breaks and business visits."
  },
  {
    "id": 13,
    "name": "Garden Pune Retreat",
    "location": "Pune",
    "region": "West India",
    "price": 3500,
    "rating": 4.7,
    "rooms": 26,
    "image": "image-1",
    "amenities": [
      "Wi-Fi",
      "Pool",
      "Breakfast",
      "Parking",
      "Spa",
      "Restaurant"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 3500,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 4700,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 6300,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample west india stay in Pune, designed for comfortable city breaks and business visits."
  },
  {
    "id": 14,
    "name": "Palm Court Pune Stay",
    "location": "Pune",
    "region": "West India",
    "price": 4400,
    "rating": 4.8,
    "rooms": 8,
    "image": "image-2",
    "amenities": [
      "Wi-Fi",
      "Pool",
      "Breakfast",
      "Restaurant",
      "Gym"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 4400,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 5600,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 7200,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample west india stay in Pune, designed for comfortable city breaks and business visits."
  },
  {
    "id": 15,
    "name": "Metro Ahmedabad Suites",
    "location": "Ahmedabad",
    "region": "West India",
    "price": 3250,
    "rating": 4.8,
    "rooms": 29,
    "image": "image-3",
    "amenities": [
      "Wi-Fi",
      "Breakfast",
      "Gym",
      "AC",
      "Work Desk",
      "Laundry"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 3250,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 4450,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 6050,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample west india stay in Ahmedabad, designed for comfortable city breaks and business visits."
  },
  {
    "id": 16,
    "name": "Cedar Ahmedabad Grand",
    "location": "Ahmedabad",
    "region": "West India",
    "price": 4150,
    "rating": 4.1,
    "rooms": 11,
    "image": "image-4",
    "amenities": [
      "Wi-Fi",
      "Breakfast",
      "Parking",
      "Work Desk",
      "AC"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 4150,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 5350,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 6950,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample west india stay in Ahmedabad, designed for comfortable city breaks and business visits."
  },
  {
    "id": 17,
    "name": "Heritage Jaipur House",
    "location": "Jaipur",
    "region": "North India",
    "price": 4300,
    "rating": 4.1,
    "rooms": 9,
    "image": "image-5",
    "amenities": [
      "Wi-Fi",
      "Breakfast",
      "Restaurant",
      "Parking",
      "Spa"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 4300,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 5500,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 7100,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample north india stay in Jaipur, designed for comfortable city breaks and business visits."
  },
  {
    "id": 18,
    "name": "Sunrise Jaipur Residency",
    "location": "Jaipur",
    "region": "North India",
    "price": 5200,
    "rating": 4.2,
    "rooms": 14,
    "image": "image-6",
    "amenities": [
      "Wi-Fi",
      "Breakfast",
      "Restaurant",
      "Laundry",
      "Airport Shuttle"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 5200,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 6400,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 8000,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample north india stay in Jaipur, designed for comfortable city breaks and business visits."
  },
  {
    "id": 19,
    "name": "Lakeview Lucknow Hotel",
    "location": "Lucknow",
    "region": "North India",
    "price": 2900,
    "rating": 4.2,
    "rooms": 12,
    "image": "image-1",
    "amenities": [
      "Wi-Fi",
      "Pool",
      "Breakfast",
      "Parking",
      "AC",
      "Airport Shuttle"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 2900,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 4100,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 5700,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample north india stay in Lucknow, designed for comfortable city breaks and business visits."
  },
  {
    "id": 20,
    "name": "Bluebird Lucknow Suites",
    "location": "Lucknow",
    "region": "North India",
    "price": 3800,
    "rating": 4.3,
    "rooms": 17,
    "image": "image-2",
    "amenities": [
      "Wi-Fi",
      "Pool",
      "Breakfast",
      "Spa",
      "Parking"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 3800,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 5000,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 6600,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample north india stay in Lucknow, designed for comfortable city breaks and business visits."
  },
  {
    "id": 21,
    "name": "Central Kochi Residency",
    "location": "Kochi",
    "region": "South India",
    "price": 3650,
    "rating": 4.3,
    "rooms": 15,
    "image": "image-3",
    "amenities": [
      "Wi-Fi",
      "Breakfast",
      "Parking",
      "AC",
      "Restaurant"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 3650,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 4850,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 6450,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample south india stay in Kochi, designed for comfortable city breaks and business visits."
  },
  {
    "id": 22,
    "name": "Cityscape Kochi Lodge",
    "location": "Kochi",
    "region": "South India",
    "price": 4550,
    "rating": 4.4,
    "rooms": 20,
    "image": "image-4",
    "amenities": [
      "Wi-Fi",
      "Breakfast",
      "Parking",
      "AC",
      "Laundry"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 4550,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 5750,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 7350,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample south india stay in Kochi, designed for comfortable city breaks and business visits."
  },
  {
    "id": 23,
    "name": "Garden Panaji Retreat",
    "location": "Panaji",
    "region": "West India",
    "price": 5700,
    "rating": 4.4,
    "rooms": 18,
    "image": "image-5",
    "amenities": [
      "Wi-Fi",
      "Pool",
      "Breakfast",
      "Parking",
      "Spa",
      "Restaurant"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 5700,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 6900,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 8500,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample west india stay in Panaji, designed for comfortable city breaks and business visits."
  },
  {
    "id": 24,
    "name": "Palm Court Panaji Stay",
    "location": "Panaji",
    "region": "West India",
    "price": 6600,
    "rating": 4.5,
    "rooms": 23,
    "image": "image-6",
    "amenities": [
      "Wi-Fi",
      "Pool",
      "Breakfast",
      "Restaurant",
      "Gym"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 6600,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 7800,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 9400,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample west india stay in Panaji, designed for comfortable city breaks and business visits."
  },
  {
    "id": 25,
    "name": "Metro Varanasi Suites",
    "location": "Varanasi",
    "region": "North India",
    "price": 3100,
    "rating": 4.5,
    "rooms": 21,
    "image": "image-1",
    "amenities": [
      "Wi-Fi",
      "Breakfast",
      "Gym",
      "AC",
      "Work Desk",
      "Laundry"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 3100,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 4300,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 5900,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample north india stay in Varanasi, designed for comfortable city breaks and business visits."
  },
  {
    "id": 26,
    "name": "Cedar Varanasi Grand",
    "location": "Varanasi",
    "region": "North India",
    "price": 4000,
    "rating": 4.6,
    "rooms": 26,
    "image": "image-2",
    "amenities": [
      "Wi-Fi",
      "Breakfast",
      "Parking",
      "Work Desk",
      "AC"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 4000,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 5200,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 6800,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample north india stay in Varanasi, designed for comfortable city breaks and business visits."
  },
  {
    "id": 27,
    "name": "Heritage Chandigarh House",
    "location": "Chandigarh",
    "region": "North India",
    "price": 3950,
    "rating": 4.6,
    "rooms": 24,
    "image": "image-3",
    "amenities": [
      "Wi-Fi",
      "Breakfast",
      "Restaurant",
      "Parking",
      "Spa"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 3950,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 5150,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 6750,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample north india stay in Chandigarh, designed for comfortable city breaks and business visits."
  },
  {
    "id": 28,
    "name": "Sunrise Chandigarh Residency",
    "location": "Chandigarh",
    "region": "North India",
    "price": 4850,
    "rating": 4.7,
    "rooms": 29,
    "image": "image-4",
    "amenities": [
      "Wi-Fi",
      "Breakfast",
      "Restaurant",
      "Laundry",
      "Airport Shuttle"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 4850,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 6050,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 7650,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample north india stay in Chandigarh, designed for comfortable city breaks and business visits."
  },
  {
    "id": 29,
    "name": "Lakeview Indore Hotel",
    "location": "Indore",
    "region": "Central India",
    "price": 3300,
    "rating": 4.7,
    "rooms": 27,
    "image": "image-5",
    "amenities": [
      "Wi-Fi",
      "Pool",
      "Breakfast",
      "Parking",
      "AC",
      "Airport Shuttle"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 3300,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 4500,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 6100,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample central india stay in Indore, designed for comfortable city breaks and business visits."
  },
  {
    "id": 30,
    "name": "Bluebird Indore Suites",
    "location": "Indore",
    "region": "Central India",
    "price": 4200,
    "rating": 4.8,
    "rooms": 9,
    "image": "image-6",
    "amenities": [
      "Wi-Fi",
      "Pool",
      "Breakfast",
      "Spa",
      "Parking"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 4200,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 5400,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 7000,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample central india stay in Indore, designed for comfortable city breaks and business visits."
  },
  {
    "id": 31,
    "name": "Central Bhopal Residency",
    "location": "Bhopal",
    "region": "Central India",
    "price": 2700,
    "rating": 4.8,
    "rooms": 30,
    "image": "image-1",
    "amenities": [
      "Wi-Fi",
      "Breakfast",
      "Parking",
      "AC",
      "Restaurant"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 2700,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 3900,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 5500,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample central india stay in Bhopal, designed for comfortable city breaks and business visits."
  },
  {
    "id": 32,
    "name": "Cityscape Bhopal Lodge",
    "location": "Bhopal",
    "region": "Central India",
    "price": 3600,
    "rating": 4.1,
    "rooms": 12,
    "image": "image-2",
    "amenities": [
      "Wi-Fi",
      "Breakfast",
      "Parking",
      "AC",
      "Laundry"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 3600,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 4800,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 6400,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample central india stay in Bhopal, designed for comfortable city breaks and business visits."
  },
  {
    "id": 33,
    "name": "Garden Bhubaneswar Retreat",
    "location": "Bhubaneswar",
    "region": "East India",
    "price": 3150,
    "rating": 4.1,
    "rooms": 10,
    "image": "image-3",
    "amenities": [
      "Wi-Fi",
      "Pool",
      "Breakfast",
      "Parking",
      "Spa",
      "Restaurant"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 3150,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 4350,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 5950,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample east india stay in Bhubaneswar, designed for comfortable city breaks and business visits."
  },
  {
    "id": 34,
    "name": "Palm Court Bhubaneswar Stay",
    "location": "Bhubaneswar",
    "region": "East India",
    "price": 4050,
    "rating": 4.2,
    "rooms": 15,
    "image": "image-4",
    "amenities": [
      "Wi-Fi",
      "Pool",
      "Breakfast",
      "Restaurant",
      "Gym"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 4050,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 5250,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 6850,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample east india stay in Bhubaneswar, designed for comfortable city breaks and business visits."
  },
  {
    "id": 35,
    "name": "Metro Visakhapatnam Suites",
    "location": "Visakhapatnam",
    "region": "South India",
    "price": 3800,
    "rating": 4.2,
    "rooms": 13,
    "image": "image-5",
    "amenities": [
      "Wi-Fi",
      "Breakfast",
      "Gym",
      "AC",
      "Work Desk",
      "Laundry"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 3800,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 5000,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 6600,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample south india stay in Visakhapatnam, designed for comfortable city breaks and business visits."
  },
  {
    "id": 36,
    "name": "Cedar Visakhapatnam Grand",
    "location": "Visakhapatnam",
    "region": "South India",
    "price": 4700,
    "rating": 4.3,
    "rooms": 18,
    "image": "image-6",
    "amenities": [
      "Wi-Fi",
      "Breakfast",
      "Parking",
      "Work Desk",
      "AC"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 4700,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 5900,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 7500,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample south india stay in Visakhapatnam, designed for comfortable city breaks and business visits."
  },
  {
    "id": 37,
    "name": "Heritage Vijayawada House",
    "location": "Vijayawada",
    "region": "South India",
    "price": 2600,
    "rating": 4.3,
    "rooms": 16,
    "image": "image-1",
    "amenities": [
      "Wi-Fi",
      "Breakfast",
      "Restaurant",
      "Parking",
      "Spa"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 2600,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 3800,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 5400,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample south india stay in Vijayawada, designed for comfortable city breaks and business visits."
  },
  {
    "id": 38,
    "name": "Sunrise Vijayawada Residency",
    "location": "Vijayawada",
    "region": "South India",
    "price": 3500,
    "rating": 4.4,
    "rooms": 21,
    "image": "image-2",
    "amenities": [
      "Wi-Fi",
      "Breakfast",
      "Restaurant",
      "Laundry",
      "Airport Shuttle"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 3500,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 4700,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 6300,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample south india stay in Vijayawada, designed for comfortable city breaks and business visits."
  },
  {
    "id": 39,
    "name": "Lakeview Mysuru Hotel",
    "location": "Mysuru",
    "region": "South India",
    "price": 3250,
    "rating": 4.4,
    "rooms": 19,
    "image": "image-3",
    "amenities": [
      "Wi-Fi",
      "Pool",
      "Breakfast",
      "Parking",
      "AC",
      "Airport Shuttle"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 3250,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 4450,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 6050,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample south india stay in Mysuru, designed for comfortable city breaks and business visits."
  },
  {
    "id": 40,
    "name": "Bluebird Mysuru Suites",
    "location": "Mysuru",
    "region": "South India",
    "price": 4150,
    "rating": 4.5,
    "rooms": 24,
    "image": "image-4",
    "amenities": [
      "Wi-Fi",
      "Pool",
      "Breakfast",
      "Spa",
      "Parking"
    ],
    "roomTypes": [
      {
        "id": "standard",
        "name": "Standard Room",
        "price": 4150,
        "maxGuests": 2,
        "description": "A comfortable room with essential amenities for a short city stay."
      },
      {
        "id": "deluxe",
        "name": "Deluxe Room",
        "price": 5350,
        "maxGuests": 3,
        "description": "A larger room with upgraded furnishings and extra space."
      },
      {
        "id": "suite",
        "name": "Executive Suite",
        "price": 6950,
        "maxGuests": 4,
        "description": "A spacious suite with a separate sitting area and premium comforts."
      }
    ],
    "description": "A sample south india stay in Mysuru, designed for comfortable city breaks and business visits."
  }
];

export const hotelLocations = [...new Set(hotels.map((hotel) => hotel.location))].sort();
export const amenityOptions = [...new Set(hotels.flatMap((hotel) => hotel.amenities))].sort();

export default hotels;
