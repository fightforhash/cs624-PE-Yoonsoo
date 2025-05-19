## Input
The application starts with a static array of six profile objects. Each object includes a local image asset (user.png), the user’s full name, their job title, a brief biography text, and a Boolean flag (showThumbnail) that determines whether the card renders as a small thumbnail or full-size view. In Part 1 of the exercise, I worked with a single ProfileCard component that renders all these fields at full size.

## Process
1. **Part 1**  
I copied the HOS05 “Styling” app into PE04/Part1, then updated the ProfileCard to display my name, occupation, and description, applying custom text styles (size, weight, color, shadow) as taught in Section 4.3 of the textbook.

2. **Part 2**  
I copied the HOS06 “Styling” app into PE04/Part2, arranged six cards in a 2×3 gallery using Flexbox (flexWrap, justifyContent, alignContent), wrapped each card in a touch handler to toggle its thumbnail flag, and added conditional scale transforms with shadow/elevation for the collapsed and expanded states.

## Output
Upon completion of Part 1, the app displays a single styled ProfileCard with an image, name, occupation, and descriptive text, all rendered with shadows and customized text styles. After Part 2, the UI presents a responsive gallery of six cards arranged in two columns and three rows. All cards initially appear as thumbnails; tapping any one smoothly expands it to full size with a pronounced shadow, and tapping it again collapses it back to its thumbnail state—all without scrolling on a typical mobile screen.