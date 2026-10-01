// NourishAI Central State Store & Demo Data

class AppStore {
  constructor() {
    this.user = {
      name: "Ananya Sharma",
      role: "Operations Manager",
      organization: "Green Leaf Cafeteria",
      avatar: "AS",
      verified: true
    };

    this.metrics = {
      mealsRescued: 1248,
      mealsChange: "+18.4% this month",
      wasteAvoidedKg: 386,
      wasteChange: "-24.8% this month",
      moneySaved: 42600,
      moneyChange: "+12.6% this month",
      peopleSupported: 526,
      peopleChange: "+21.3% this month",
      sustainabilityScore: 86,
      co2AvoidedKg: 965,
      waterSavedLiters: 1930000
    };

    this.aiInsight = {
      applied: false,
      title: "Prepare 30 fewer meals tomorrow",
      description: "Expected attendance is lower because of rain and a weekday schedule. Adjusting preparation may prevent approximately 9 kg of food waste.",
      confidence: 91,
      estimatedSaving: 2400,
      estimatedWasteKg: 9,
      recommendedMeals: 390,
      expectedCustomers: 420,
      previousAverage: 440
    };

    this.surplusListings = [
      {
        id: "s1",
        name: "Vegetable rice",
        category: "Cooked meals",
        meals: 35,
        weightKg: 11.5,
        preparedTime: "1:30 PM",
        safeUntil: "8:30 PM",
        dietary: "Vegetarian",
        allergens: ["None", "Gluten-free"],
        status: "available", // available, matched, completed, expired
        image: "/images/veg_rice.jpg",
        location: "Green Leaf Cafeteria — Loading Dock 2",
        notes: "Kept in hot insulated catering trays at >65°C."
      },
      {
        id: "s2",
        name: "Sandwiches",
        category: "Bakery & Deli",
        meals: 18,
        weightKg: 5.2,
        preparedTime: "11:00 AM",
        safeUntil: "7:00 PM",
        dietary: "Vegetarian",
        allergens: ["Gluten", "Dairy"],
        status: "matched",
        image: "/images/sandwiches.jpg",
        location: "Green Leaf Cafeteria — Main Counter",
        notes: "Individually wrapped fresh club sandwiches in eco boxes.",
        matchedOrg: "Hope Community Kitchen",
        pickupConfirmed: true
      },
      {
        id: "s3",
        name: "Fruit boxes",
        category: "Fresh produce",
        meals: 24,
        weightKg: 8.0,
        preparedTime: "9:00 AM",
        safeUntil: "9:00 PM",
        dietary: "Vegan",
        allergens: ["None"],
        status: "completed",
        image: "/images/fruit_boxes.jpg",
        location: "Green Leaf Cafeteria — Cold Storage",
        notes: "Freshly sliced seasonal fruit packs, refrigerated.",
        matchedOrg: "Robin Hood Army Hub",
        completedTime: "12:45 PM today"
      }
    ];

    this.organizations = [
      {
        id: "org-1",
        name: "Hope Community Kitchen",
        type: "Community Kitchen",
        distanceKm: 1.8,
        travelTimeMin: 9,
        canAcceptMeals: 35,
        pickupDeadline: "8:30 PM",
        foodPreference: "Vegetarian",
        currentNeed: "High",
        matchScore: 96,
        isBestMatch: true,
        urgency: "urgent",
        coordinates: { x: 55, y: 38 }, // % on map
        address: "42 Shanti Nagar, Sector 4",
        contactPerson: "Dr. Shalini Verma",
        phone: "+91 98450 12890",
        beneficiaries: "Elderly & daily-wage workers (180 daily)",
        fssaiVerified: true,
        rating: 4.9
      },
      {
        id: "org-2",
        name: "CareBridge Shelter",
        type: "Homeless Shelter",
        distanceKm: 2.6,
        travelTimeMin: 14,
        canAcceptMeals: 50,
        pickupDeadline: "9:00 PM",
        foodPreference: "All types",
        currentNeed: "High",
        matchScore: 92,
        isBestMatch: false,
        urgency: "normal",
        coordinates: { x: 72, y: 55 },
        address: "18 Sunshine Cross Road, Block C",
        contactPerson: "Manoj Kumar",
        phone: "+91 97112 34567",
        beneficiaries: "Night shelter residents (65 families)",
        fssaiVerified: true,
        rating: 4.8
      },
      {
        id: "org-3",
        name: "Sunshine Children's Home",
        type: "Children Welfare Home",
        distanceKm: 3.1,
        travelTimeMin: 12,
        canAcceptMeals: 25,
        pickupDeadline: "7:45 PM",
        foodPreference: "Vegetarian / Mild",
        currentNeed: "Critical",
        matchScore: 89,
        isBestMatch: false,
        urgency: "urgent", // urgent deadline marker
        deadlineCountdown: "45 minutes left",
        coordinates: { x: 30, y: 68 },
        address: "7 Rose Garden Enclave",
        contactPerson: "Sister Anita",
        phone: "+91 99880 77665",
        beneficiaries: "Children & resident tutors (45 kids)",
        fssaiVerified: true,
        rating: 5.0
      },
      {
        id: "org-4",
        name: "Robin Hood Army Local Hub",
        type: "Food Rescue Volunteer Network",
        distanceKm: 4.0,
        travelTimeMin: 18,
        canAcceptMeals: 80,
        pickupDeadline: "9:30 PM",
        foodPreference: "All types",
        currentNeed: "Moderate",
        matchScore: 85,
        isBestMatch: false,
        urgency: "normal",
        coordinates: { x: 22, y: 28 },
        address: "Civic Centre Hall 3, Metro Station Road",
        contactPerson: "Kavita Nair",
        phone: "+91 94220 54321",
        beneficiaries: "Cluster settlements (300+ people)",
        fssaiVerified: true,
        rating: 4.9
      }
    ];

    this.activeRoute = {
      id: "rt-104",
      listingName: "Vegetable rice",
      meals: 35,
      pickupLocation: "Green Leaf Cafeteria",
      dropoffLocation: "Hope Community Kitchen",
      distanceKm: 1.8,
      estimatedTimeMin: 9,
      pickupDeadline: "8:30 PM",
      currentStep: 2, // 1: Created, 2: Volunteer assigned, 3: Picked up, 4: Delivered
      steps: [
        { label: "Created", time: "1:45 PM", status: "completed" },
        { label: "Volunteer assigned", time: "2:05 PM", status: "completed" },
        { label: "Picked up", time: "Pending", status: "current" },
        { label: "Delivered", time: "Expected 2:35 PM", status: "upcoming" }
      ],
      volunteer: {
        name: "Ravi Kumar",
        role: "Certified Green Volunteer",
        rating: 4.9,
        totalPickups: 142,
        vehicle: "Electric 2-Wheeler (Thermal insulated carrier)",
        phone: "+91 98765 43210",
        currentStatus: "En route to Cafeteria (ETA 6 min)",
        avatar: "RK"
      }
    };

    this.notifications = [
      {
        id: "n1",
        priority: "urgent", // urgent, important, info
        title: "Pickup deadline in 30 minutes",
        message: "Vegetable rice at Loading Dock 2 must be picked up before 8:30 PM.",
        time: "5m ago",
        read: false,
        badge: "Urgent"
      },
      {
        id: "n2",
        priority: "important",
        title: "AI prediction is ready for tomorrow",
        message: "Recommended: 390 meals (30 fewer than avg). High rainfall expected.",
        time: "25m ago",
        read: false,
        badge: "AI Prediction"
      },
      {
        id: "n3",
        priority: "info",
        title: "Hope Community Kitchen accepted your donation",
        message: "Match confirmed for 35 meals of Vegetable rice. Volunteer Ravi assigned.",
        time: "45m ago",
        read: false,
        badge: "Match"
      },
      {
        id: "n4",
        priority: "info",
        title: "Your sustainability score increased to 86",
        message: "Great work! Kitchen waste reduction has reached top 5% of local cafeterias.",
        time: "3h ago",
        read: true,
        badge: "Impact"
      },
      {
        id: "n5",
        priority: "important",
        title: "New community kitchen request nearby",
        message: "CareBridge Shelter requested surplus dinners for 40 individuals tonight.",
        time: "5h ago",
        read: true,
        badge: "Request"
      }
    ];

    this.liveActivity = [
      {
        id: "act-1",
        title: "35 meals matched with Hope Community Kitchen",
        time: "10m ago",
        badge: "Matched",
        type: "success"
      },
      {
        id: "act-2",
        title: "18 meals picked up by Ravi",
        time: "35m ago",
        badge: "In transit",
        type: "info"
      },
      {
        id: "act-3",
        title: "12 kg food waste avoided today",
        time: "2h ago",
        badge: "Verified",
        type: "success"
      },
      {
        id: "act-4",
        title: "New NGO request received from CareBridge Shelter",
        time: "3h ago",
        badge: "New request",
        type: "warning"
      }
    ];

    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(fn => fn(this));
  }

  applyAiRecommendation() {
    this.aiInsight.applied = true;
    this.metrics.moneySaved += 2400;
    this.metrics.wasteAvoidedKg += 9;
    this.notify();
  }

  addSurplusListing(listing) {
    this.surplusListings.unshift({
      id: "s" + Date.now(),
      ...listing,
      status: "available"
    });
    this.metrics.mealsRescued += Number(listing.meals) || 0;
    this.liveActivity.unshift({
      id: "act-" + Date.now(),
      title: `${listing.meals} meals of ${listing.name} listed for rescue`,
      time: "Just now",
      badge: "Available",
      type: "success"
    });
    this.notify();
  }

  acceptMatch(orgId) {
    const org = this.organizations.find(o => o.id === orgId);
    if (!org) return;

    // Update first available listing to matched
    const availListing = this.surplusListings.find(s => s.status === "available");
    if (availListing) {
      availListing.status = "matched";
      availListing.matchedOrg = org.name;
    }

    this.activeRoute.dropoffLocation = org.name;
    this.activeRoute.distanceKm = org.distanceKm;
    this.activeRoute.estimatedTimeMin = org.travelTimeMin;
    this.activeRoute.pickupDeadline = org.pickupDeadline;
    this.activeRoute.currentStep = 2;

    this.liveActivity.unshift({
      id: "act-" + Date.now(),
      title: `Match accepted with ${org.name}`,
      time: "Just now",
      badge: "Matched",
      type: "info"
    });

    this.notify();
  }

  updateRouteStep(stepNumber) {
    this.activeRoute.currentStep = stepNumber;
    if (stepNumber === 3) {
      this.activeRoute.steps[2].status = "completed";
      this.activeRoute.steps[2].time = "Just now";
      this.activeRoute.steps[3].status = "current";
      this.liveActivity.unshift({
        id: "act-" + Date.now(),
        title: `Ravi picked up 35 meals from Cafeteria`,
        time: "Just now",
        badge: "In transit",
        type: "info"
      });
    } else if (stepNumber === 4) {
      this.activeRoute.steps[3].status = "completed";
      this.activeRoute.steps[3].time = "Just now";
      this.metrics.mealsRescued += 35;
      this.metrics.peopleSupported += 35;
      this.metrics.wasteAvoidedKg += 11;
      this.metrics.sustainabilityScore = Math.min(100, this.metrics.sustainabilityScore + 1);

      // mark vegetable rice as completed
      const vegRice = this.surplusListings.find(s => s.name === "Vegetable rice");
      if (vegRice) vegRice.status = "completed";

      this.liveActivity.unshift({
        id: "act-" + Date.now(),
        title: `Donation delivered to Hope Community Kitchen!`,
        time: "Just now",
        badge: "Delivered",
        type: "success"
      });
    }
    this.notify();
  }

  markAllNotificationsRead() {
    this.notifications.forEach(n => n.read = true);
    this.notify();
  }
}

export const store = new AppStore();
