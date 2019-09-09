---
title: Hindcasting storm impacts from 2016 Australian East Coast Low
date: "2019-09-10T23:46:37.121Z"
template: "post"
draft: false
slug: "/posts/hindcasting-2016-ecl/"
category: "PhD"
tags:
  - "Storm impacts"
  - "Early warning systems"
description: "In this post, we'll look at how well we could have predicted the impacts from the June 2016 storm which hit the South-Eastern Australian coastline, and what this means for Early Warnings Systems."
socialImage: "(/media/2019_09_10_coasts_and_ports/output-0.png"
---

This was the first presentation I gave about my PhD work as part of the [2019 Coasts & Ports](https://coastsandports2019.com.au/) conference in Hobart, Tasmania. The slides I used are below as well as an outline of my talk.

If you found this interesting or have any questions or ideas, please [reach out](chris@leaman.io)! 

![](/media/2019_09_10_coasts_and_ports/output-0.gif)
- This drone shot shows some of the impacts from the 2016 storm which hit Australia's south-eastern coast.
- A changing climate means our storms are also going to change (how intense they are, which direction they come from, how fast they move).
- If we can predict where storms are going to cause damage using an Early Warning System (EWS), we can build temporary protections to reduce or mitigate the damage.

![](/media/2019_09_10_coasts_and_ports/output-1.gif)
- However, how can we model storm impacts (usually erosion and flooding)?
- Morphodynamic models (such as [XBeach](https://oss.deltares.nl/web/xbeach/)) do a great job resolving waves and how sand is likely to shift, but they need lots of CPU power to run and lots of data to properly calibrate.
- But storms are really big and they can affect hundreds of beaches at a time so it's hard to run a morphodynamic model at each beach.
- So how can we make an EWS that will tell us where the damage is going to be over large areas?

![](/media/2019_09_10_coasts_and_ports/output-2.png)
- It turns out a lot of organisations are interested in this problem.
- An ARC funded research project was setup to develop a trial EWS for storm impacts using a two tier approach.
- Tier 1 (which is what my work is focused on) is a first pass overview over the storm impacts at the regional scale. Using something like a traffic light system (green = low impacts, yellow = moderate impacts, red = extreme impacts) gives a simple overview of which locations may be vulnerable.
- At existing erosion hotspots, Tier 2 will involve running morphodynamic models to get a more detailed understanding of the impacts.

![](/media/2019_09_10_coasts_and_ports/output-3.png)
- So for the first pass forecasting, what should each traffic light colour (green, yellow, red) represent?
- One option is the Storm Impact Scale developed by Sallenger (2000). Depending on the level of the water level and the dune toe and crest, one of four Storm Impact Regimes are determined.
- This system is used by the [USGS Coastal Change Hazard Portal](https://marine.usgs.gov/coastalchangehazardsportal/) for the U.S. East coast.

![](/media/2019_09_10_coasts_and_ports/output-4.gif)
- The USGS also run a second product in this location, called the [Total Water Level Viewer](https://coastal.er.usgs.gov/hurricanes/research/twlviewer/) which shows how the water level varies over time.
- The slide shows a forecast for [Hurricane Dorian](https://twitter.com/i/events/1167460137071607808?lang=en) on the Florida coastline.

![](/media/2019_09_10_coasts_and_ports/output-5.gif)
- So can we just adopt the USGS system on the South-East Australian coastline?
- Well, the U.S. East coast and the South-East Australian coastline are quite different in terms of storms.
- On the U.S East coast, a wide shelf generated large storm surges, but allows a lot of the wave energy to dissipate. Here, storm impacts are primarily driven by flooding.
- On the South-East Australian coast, the narrow shelf allows more wave energy to reach the shore. Here, storm impacts are primarily driven by erosion.

![](/media/2019_09_10_coasts_and_ports/output-6.png)
- We need to see if the Storm Impact Scale can work well on the South-East Australian coast where impacts are more erosion dominated.
- We'll hindcast the Storm Impact Regime from the 2016 storm and see if it produce a useful forecast that could have allowed us to know in advance the location and severity of the storm impacts.

![](/media/2019_09_10_coasts_and_ports/output-7.png)
- The 2016 East Coast Low [caused significant erosion](https://www.smh.com.au/environment/weather/sydney-storm-erosion-swallows-50-metres-of-collaroy-narrabeen-beaches-20160607-gpd2ob.html) on the South-East Australian coastline.
- Unusually severe erosion was due to the coincidence of the storm with Highest Astronomical Tides as well as an anomalously easterly wave direction.

![](/media/2019_09_10_coasts_and_ports/output-8.png)
- Immediately prior and after the event, UNSW flew airborne LIDAR over 177 km of shorelines between Sydney and Nambucca Heads.
- Cross shore beach profiles were extracted at 100 m alongshore spacings for this analysis.
- Several wave buoys and tide gauges were also operational during the storm within the surveyed region.

![](/media/2019_09_10_coasts_and_ports/output-9.png)
- To establish the observed Storm Impact Regime (either swash, collision, overwash or inundation), the pre and post storm surveys were compared.
- It was assumed the highest water level corresponded to the point with the pre and post storm surveys started to differ.

![](/media/2019_09_10_coasts_and_ports/output-10.png)
- At each beach profile, the Storm Impact Regime was hindcast.
- Total water levels were estimated using observed waves (transformed inshore to the 10 m depth contour) and observed water levels.
- The runup component of the total water level was estimated using [Stockdon et al. (2006)]( https://www.sciencedirect.com/science/article/pii/S0378383906000044).
- The dune toe and crest elevations were manually extracted from the survey data.

![](/media/2019_09_10_coasts_and_ports/output-11.png)
- If we compare the hindcast regime to the observed storm regimes, we see that the correct regime was selected around 65% of the time.
- But, 97% of the beach profiles either fell into the swash or collision regime. 
- How useful would a forecast have been if there are only two levels in the forecast?

![](/media/2019_09_10_coasts_and_ports/output-12.png)
- One example of why this might be a problem is if we look at Narrabeen-Collaroy beach.
- The left diagram shows each beach profile and the observed storm impact regime (green=swash, yellow=collision).
- Looking at the collision regime (yellow dots), impacts to the northern end are mild (only a bit of the dune toe is eroded). However, at the middle and southern end, we have houses falling onto the beach.
- Even though these are all examples of dune collision, we need a better way to describe the severity of erosion at each location. 

![](/media/2019_09_10_coasts_and_ports/output-13.png)
- For surge-dominated coastlines where there can be a large range of water levels, all four Storm Impact Regimes can be commonly observed.

![](/media/2019_09_10_coasts_and_ports/output-14.png)
- However, for wave-dominated coasts, such as those in SE Australia, water levels don't vary as much.
- This means, most of the time we are either in the swash or collision regime.

![](/media/2019_09_10_coasts_and_ports/output-16.png)
- So there seems to be two different ways of thinking about storm impacts.
- If we think about flooding, the vertical axis, i.e. how high is the water level going to reach is important. This would be the focus on surge-dominated coasts.
- If we are more concerned about erosion, such as on wave-dominated coasts, the horizontal distance of eroded beach becomes more important.

![](/media/2019_09_10_coasts_and_ports/output-17.png)
- Therefore, a new scale to better describe erosion hazards is being developed.
- In the figure, each coloured line represents a post-storm profile.
- We can classify erosion hazards into four levels based on the changes in the beach width and dune.

![](/media/2019_09_10_coasts_and_ports/output-18.png)
- If we apply this to the Narrabeen-Collaroy beach example we saw earlier, we can now identify that the southern end of the beach experienced severe impact (in this case 'dune retreat').
- This is an improvement compared to the Storm Impact Scale which just assigned collision at both locations.
- Work is still ongoing to see how the Erosion Hazard Scale would perform over the entire NSW coastline.

![](/media/2019_09_10_coasts_and_ports/output-19.png)
- In summary, we can do a reasonable job of predicting storm impacts.
- But, if our impacts are primarily erosion, it might be better to use a different framework to describe those impacts.
- This framework would be used by an EWS to alert the community and authorities before a storm so they can take actions to minimize potential damage.
