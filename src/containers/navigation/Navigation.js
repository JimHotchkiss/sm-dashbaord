import {React, useState} from 'react'
import './Navigation.css'
import NavigationComponent from '../../components/navigation_component/NavigationComponent'



const Navigation = ({handleItemBtnClick, itemBtn, setItemBtn}) => {

  const [features, setFeatures] = useState([
    { 
      featureName: 'Capital Products', id: 1,  productList: [
      { productName: 'Adaptable Beach Chair', categories:[{ name: 'Capital', id:"a-1"}, { name: 'Disposables', id:"a-2"}, { name: 'Replacement Parts', id:"a-3"}], body: 'Product One body', id: 1},
      { productName: 'Alphavent', categories:[{ name: 'Capital', id: 'a-4'}, { name: 'Disposables', id: 'a-5'}, { name: 'Replacement Parts', id: 'a-6'}], body: 'Product One body', id: 2},
      { productName: 'Adaptable Arm Positioner', categories:[{ name: 'Capital', id:"a-7"}, { name: 'Disposables', id:"a-8"}, { name: 'Replacement Parts', id:"a-9"}], body: 'Product One body', id: 3}
  ]}, {
    featureName: "Implant Families", id: 2, productList: [
{
  productName: "Iconix" , categories:[{
    name: "ICONIX 1",
    // "pn": "3910-500-512",
    id:"3910-1",
    // "img_url": "../images/iconix1.png",
    // "MATERIAL": "Polyester Suture (UHMWPE)",
    // "IMPLANT_LENGTH": "12mm \n(4.5mm  deployed)",
    // "IMPLANT_WIDTH": "1.4mm \n(3mm  deployed)",
    // "POSITIVE_STOP": "yes",
    // "IMPLANT_DRILL_DEPTH": " 3910500568: 20mm (from back end to end before spike); 21mm (from back end to full tip)",
    // "IMPLANT_DRILL_WIDTH": "1.4mm",
    // "PULL_OUT_STRENGTH": "65 lb",
    // "NOTES": "1 strand #2 Force Fiber"
},
{
    name: "ICONIX 1 with Needles",
    // "pn": "3910-500-412",
    id:"3910-2",
    // "img_url": "",
    // "MATERIAL": "Polyester Suture (UHMWPE)",
    // "IMPLANT_LENGTH": "8mm\n(4mm deployed)",
    // "IMPLANT_WIDTH": "1.4mm\n(3mm deployed)",
    // "POSITIVE_STOP": "Yes",
    // "IMPLANT_DRILL_DEPTH": "3910-500-412 (drill sold in kit with implant): 17mm (tip to hard stop)",
    // "IMPLANT_DRILL_WIDTH": "1.4mm",
    // "PULL_OUT_STRENGTH": "",
    // "NOTES": "1 strand #2 Force Fiber (Taper cutting Needle Radius .345)"
},
{
    name: "ICONIX 1 TT",
    // "pn": "3910-500-312",
    id:"3910-3",
    // "img_url": "../images/iconix2.png",
    // "MATERIAL": "Polyester Suture (UHMWPE)",
    // "IMPLANT_LENGTH": "12mm \n(4.5mm  deployed)",
    // "IMPLANT_WIDTH": "1.4mm \n(3mm  deployed)",
    // "POSITIVE_STOP": "yes",
    // "IMPLANT_DRILL_DEPTH": " 3910500568: 20mm (from back end to end before spike); 21mm (from back end to full tip)",
    // "IMPLANT_DRILL_WIDTH": "1.4mm",
    // "PULL_OUT_STRENGTH": "67 lb",
    // "NOTES": "1.2mm XBRAID TT"
},
{
    name: "ICONIX 1 TT \n with Needles",
    // "pn": "3910-500-212",
    id:"3910-4",
    // "img_url": "",
    // "MATERIAL": "Polyester Suture (UHMWPE)",
    // "IMPLANT_LENGTH": "8mm\n(4mm deployed)",
    // "IMPLANT_WIDTH": "1.4mm\n(3mm deployed)",
    // "POSITIVE_STOP": "Yes",
    // "IMPLANT_DRILL_DEPTH": "3910-500-212 (drill sold in kit with implant): 17mm (tip to hard stop)",
    // "IMPLANT_DRILL_WIDTH": "1.4mm",
    // "PULL_OUT_STRENGTH": "",
    // "NOTES": "1.2mm Xbraid TT (Taper Cutting Needle Radius .345)"
},
{
    name: "ICONIX 2",
    // "pn": "3910-500-522",
    id:"3910-5",
    // "img_url": "",
    // "MATERIAL": "Polyester Suture (UHMWPE)",
    // "IMPLANT_LENGTH": "12mm \n(8mm  deployed)",
    // "IMPLANT_WIDTH": "2.3mm \n(4.0 mm  deployed)",
    // "POSITIVE_STOP": "yes",
    // "IMPLANT_DRILL_DEPTH": "3910-500-569: 20mm (from back end to end before spike); 21.5mm (from back end to full tip)",
    // "IMPLANT_DRILL_WIDTH": "2.3mm",
    // "PULL_OUT_STRENGTH": "107 lb",
    // "NOTES": "2 strands #2 Force Fiber"
},
{
    name: "ICONIX 2 \n with needles",
    // "pn": "3910-500-422",
    id:"3910-6",
    // "img_url": "",
    // "MATERIAL": "Polyester Suture (UHMWPE)",
    // "IMPLANT_LENGTH": "12mm\ndeployed - same as standard ICONIX 2",
    // "IMPLANT_WIDTH": "2.3mm\ndeployed - same as standard ICONIX 2",
    // "POSITIVE_STOP": "yes",
    // "IMPLANT_DRILL_DEPTH": "3910-500-422 (drill sold in kit with implant): 22mm (tip to hard stop)",
    // "IMPLANT_DRILL_WIDTH": "2.3mm",
    // "PULL_OUT_STRENGTH": "",
    // "NOTES": "2 strands #2 Force Fiber (Drill depth 20mm Taper Cutting Needle Radius .345)"
},
{
    name: "ICONIX 2 TT",
    // "pn": "3910-500-322",
    id:"3910-7",
    // "img_url": "",
    // "MATERIAL": "Polyester Suture (UHMWPE)",
    // "IMPLANT_LENGTH": "12mm \n(8mm  deployed)",
    // "IMPLANT_WIDTH": "2.3mm \n(4.0 mm  deployed)",
    // "POSITIVE_STOP": "yes",
    // "IMPLANT_DRILL_DEPTH": "3910-500-569: 20mm (from back end to end before spike); 21.5mm (from back end to full tip)",
    // "IMPLANT_DRILL_WIDTH": "2.3mm",
    // "PULL_OUT_STRENGTH": "115 lb",
    // "NOTES": "2.0mm XBRAID TT"
},
{
    name: "ICONIX 2 TT \n with needles",
    // "pn": "3910-500-222",
    id:"3910-8",
    // "img_url": "",
    // "MATERIAL": "Polyester Suture (UHMWPE)",
    // "IMPLANT_LENGTH": "12mm\ndeployed - same as standard ICONIX 2",
    // "IMPLANT_WIDTH": "2.3mm\ndeployed - same as standard ICONIX 2",
    // "POSITIVE_STOP": "yes",
    // "IMPLANT_DRILL_DEPTH": "3910-500-222 (drill sold in kit with implant): 22mm (tip to hard stop)",
    // "IMPLANT_DRILL_WIDTH": "2.3mm",
    // "PULL_OUT_STRENGTH": "",
    // "NOTES": "2.0mm XBraid TT (Drill Depth 20mm Taper Needle Radius .345)"       
},
{
    name: "ICONIX 3",
    // "pn": "3910-500-532",
    id:"3910-9",
    // "img_url": "",
    // "MATERIAL": "Polyester Suture (UHMWPE)",
    // "IMPLANT_LENGTH": "12mm \n(8mm  deployed)",
    // "IMPLANT_WIDTH": "2.3mm \n(4.0 mm  deployed)",
    // "POSITIVE_STOP": "yes",
    // "IMPLANT_DRILL_DEPTH": "3910-500-569: 20mm (from back end to end before spike); 21.5mm (from back end to full tip)",
    // "IMPLANT_DRILL_WIDTH": "2.3mm",
    // "PULL_OUT_STRENGTH": "121.4 lb",
    // "NOTES": "3 strands #2 Force Fiber"
},
{
    name: "ICONIX 25",
    // "pn": "3910-500-525",
    id:"3910-10",
    // "img_url": "",
    // "MATERIAL": "Polyester Suture (UHMWPE)",
    // "IMPLANT_LENGTH": "12mm \n(8mm  deployed)",
    // "IMPLANT_WIDTH": "2.3mm \n(4.0 mm  deployed)",
    // "POSITIVE_STOP": "yes",
    // "IMPLANT_DRILL_DEPTH": "3910-500-569: 20mm (from back end to end before spike); 21.5mm (from back end to full tip)",
    // "IMPLANT_DRILL_WIDTH": "2.3mm",
    // "PULL_OUT_STRENGTH": "123.6 lb",
    // "NOTES": "2 strands #5 Force Fiber"
}], body: 'Body One', id: 1
},
{
  productName: "Iconix Speed", categories:[
  {
    name: "ICONIX SPEED Triple Loaded 1.2 mm Xbraid TT",
    // "pn": "3910-500-931",
    id:"3910-11",
    // "img_url": "",
    // "MATERIAL": "Polyester Suture (UHMWPE)",
    // "IMPLANT_LENGTH": "12mm \n(8mm  deployed)",
    // "IMPLANT_WIDTH": "2.3mm \n(4.0 mm  deployed)",
    // "POSITIVE_STOP": "laser lines",
    // "IMPLANT_DRILL_DEPTH": "min insertions depth is 21mm up to  30 mm; 5 mm from min. insertion depth",
    // "IMPLANT_DRILL_WIDTH": "2.3mm",
    // "PULL_OUT_STRENGTH": "?",
    // "NOTES": "self punching, the start of the thick laser line is 21mm (min depth). The end of the thick laser line is 26mm. Each line after is 1mm more (up to 30mm)."      
  },
  {
    name: "ICONIX SPEED Double Loaded 2.0mm Xbraid TT",
    // "pn": "3910-500-920",
    id:"3910-12",
    // "img_url": "",
    // "MATERIAL": "Polyester Suture (UHMWPE)",
    // "IMPLANT_LENGTH": "12mm \n(8mm  deployed)",
    // "IMPLANT_WIDTH": "2.3mm \n(4.0 mm  deployed)",
    // "POSITIVE_STOP": "laser lines",
    // "IMPLANT_DRILL_DEPTH": "min insertions depth is 21mm up to  30 mm; 5 mm from min. insertion depth",
    // "IMPLANT_DRILL_WIDTH": "2.3mm",
    // "PULL_OUT_STRENGTH": "?",
    // "NOTES": "self punching, the start of the thick laser line is 21mm (min depth). The end of the thick laser line is 26mm. Each line after is 1mm more (up to 30mm)."     
  },
  {
    name: "ICONIX SPEED Double Loaded #2 Force Fiber",
    // "pn": "3910-500-922",
    id:"3910-13",
    // "img_url": "",
    // "MATERIAL": "Polyester Suture (UHMWPE)",
    // "IMPLANT_LENGTH": "12mm \n(8mm  deployed)",
    // "IMPLANT_WIDTH": "2.3mm \n(4.0 mm  deployed)",
    // "POSITIVE_STOP": "laser lines",
    // "IMPLANT_DRILL_DEPTH": "min insertions depth is 21mm up to  30 mm; 5 mm from min. insertion depth",
    // "IMPLANT_DRILL_WIDTH": "2.3mm",
    // "PULL_OUT_STRENGTH": "?",
    // "NOTES": "self punching, the start of the thick laser line is 21mm (min depth). The end of the thick laser line is 26mm. Each line after is 1mm more (up to 30mm)."      
  },
  {
    name: "ICONIX SPEED Combo 1.2mm & 2.0mm Xbraid TT",
    // "pn": "3910-500-921",
    id:"3910-14",
    // "img_url": "",
    // "MATERIAL": "Polyester Suture (UHMWPE)",
    // "IMPLANT_LENGTH": "12mm \n(8mm  deployed)",
    // "IMPLANT_WIDTH": "2.3mm \n(4.0 mm  deployed)",
    // "POSITIVE_STOP": "laser lines",
    // "IMPLANT_DRILL_DEPTH": "min insertions depth is 21mm up to  30 mm; 5 mm from min. insertion depth",
    // "IMPLANT_DRILL_WIDTH": "2.3mm",
    // "PULL_OUT_STRENGTH": "?",
    // "NOTES": "self punching, the start of the thick laser line is 21mm (min depth). The end of the thick laser line is 26mm. Each line after is 1mm more (up to 30mm)."
  }
  ], body: 'Body 2', id: 2
},
{
  productName: "Cinchlock", categories:[
   { 
    name: "CINCHLOCK FLEX",
    // "pn": "CAT02643",
    id:"3910-15",
    // "img_url": "",
    // "MATERIAL": "PEEK",
    // "IMPLANT_LENGTH": "12mm",
    // "IMPLANT_WIDTH": "2.4mm Distal Tip \n2.8mm Distal Barb \n3.0 Proximal Barb",
    // "POSITIVE_STOP": "laser lines come together",
    // "IMPLANT_DRILL_DEPTH": "17mm\n(DHF 02049)",
    // "IMPLANT_DRILL_WIDTH": "2.4mm",
    // "PULL_OUT_STRENGTH": "?",
    // "NOTES": "#1 Suture (packaged with the anchor) or can be loaded w/ 1.2mm  tape"
},
{
    name: "CINCHLOCK SS",
    // "pn": "CAT02462",
    id:"3910-16",
    // "img_url": "",
    // "MATERIAL": "PEEK",
    // "IMPLANT_LENGTH": "12mm",
    // "IMPLANT_WIDTH": "2.4mm Distal Tip \n2.8mm Distal Barb \n3.0 Proximal Barb",
    // "POSITIVE_STOP": "laser lines come together",
    // "IMPLANT_DRILL_DEPTH": "17mm\n(DHF 02049)",
    // "IMPLANT_DRILL_WIDTH": "2.4mm",
    // "PULL_OUT_STRENGTH": "?",
    // "NOTES": "#1 Suture (packaged with the anchor) or can be loaded w/ 1.2mm  tape"
} 
  ], body: 'Body 3', id: 3
},
{
  productName: "NanoTack", categories:[
  {
    name: "NANOTACK",
    // "pn": "CAT01386",
    id:"3910-17",
    // "img_url": "",
    // "MATERIAL": "PEEK",
    // "IMPLANT_LENGTH": "7.5mm",
    // "IMPLANT_WIDTH": "1.4mm\n(1.8mm  deployed)",
    // "POSITIVE_STOP": "Laser line",
    // "IMPLANT_DRILL_DEPTH": "16mm\n(DHF 02049)",
    // "IMPLANT_DRILL_WIDTH": "1.4mm",
    // "PULL_OUT_STRENGTH": "?",
    // "NOTES": "Preloaded with #1 Suture"
  },
 {
  name: "NANOTACK FLEX",
  // "pn": "CAT01858",
  id:"3910-18",
  // "img_url": "",
  // "MATERIAL": "PEEK",
  // "IMPLANT_LENGTH": "7.5mm",
  // "IMPLANT_WIDTH": "1.4mm\n(1.8mm  deployed)",
  // "POSITIVE_STOP": "Laser line",
  // "IMPLANT_DRILL_DEPTH": "16mm\n(DHF 02049)",
  // "IMPLANT_DRILL_WIDTH": "1.4mm",
  // "PULL_OUT_STRENGTH": "?",
  // "NOTES": "Preloaded with #1 Suture"
  },
  {
    name: "NANOTACK TT",
    // "pn": "CAT02969",
    id:"3910-19",
    // "img_url": "",
    // "MATERIAL": "PEEK",
    // "IMPLANT_LENGTH": "7.5mm",
    // "IMPLANT_WIDTH": "1.4mm\n(1.8mm  deployed)",
    // "POSITIVE_STOP": "positive stop on Iconix guide",
    // "IMPLANT_DRILL_DEPTH": "16mm\n(DHF 02049)",
    // "IMPLANT_DRILL_WIDTH": "1.4mm",
    // "PULL_OUT_STRENGTH": "21.3lbf",
    // "NOTES": "Preloaded with 1.2mm XBRAID TT"
  }
  ], body: 'Body 4', id: 4
},
{
  productName: "ReelX", categories:[
  {
    name: "REELX STT 4.5mm",
    // "pn": "3910-600-062",
    id:"3910-20",
    // "img_url": "",
    // "MATERIAL": "PEEK anchor body and Stainless Steel Core",
    // "IMPLANT_LENGTH": "17.5mm",
    // "IMPLANT_WIDTH": "4.5mm \n(expands to 5.5mm)",
    // "POSITIVE_STOP": "1st laser line = flush w/ cortical bone (2nd line is only  reference- 5mm proximal to the 1st laser line)",
    // "IMPLANT_DRILL_DEPTH": "can mallet directly\n or\n use 5mm BioZip Drill (depth: 15.2mm)\n3910-004-032\nor\nuse 5mm BioZip Awl (depth: 12.5mm) \n3910-003-050",
    // "IMPLANT_DRILL_WIDTH": "can mallet directly\n or\n use 5mm BioZip Drill (width: 3.3mm)\n3910-004-032\nor\nuse5mm BioZip Awl (width: 2.8mm) \n3910-003-050 ",
    // "PULL_OUT_STRENGTH": "?",
    // "NOTES": "up to 4 tails of #2 suture or 2 tails of 2.0mm Xbraid TT\n can use any 3.25mm drill\n1 full rotation =10mm\n*must complete 1 full rotation. MAX 3 rotations"
},
{
    name: "REELX STT 5.5mm",
    // "pn": "3910-600-060",
    id:"3910-21",
    // "img_url": "",
    // "MATERIAL": "PEEK anchor body and Stainless Steel Core",
    // "IMPLANT_LENGTH": "19.4mm",
    // "IMPLANT_WIDTH": "5.5mm\n (expands to 6.5mm)",
    // "POSITIVE_STOP": "1st laser line = flush w/ cortical bone (2nd line is only  reference- 5mm proximal to the 1st laser line)",
    // "IMPLANT_DRILL_DEPTH": "can mallet directly\n or \nuse 6.5mm Zip Drill (depth: 15.2mm) 3910-004-040\nor\nuse 65mm BioZip Awl (depth: 20mm to bury laser line) \n3910-003-065",
    // "IMPLANT_DRILL_WIDTH": "can mallet directly\n or\n use 6.5mm Zip Drill (width: 4.0mm) \n3910-004-040\nor\nuse5mm BioZip Awl (width: 3.3mm) \n3910-003-065",
    // "PULL_OUT_STRENGTH": "67.8 lb",
    // "NOTES": "up to 2 #2 sutures, NO Xbraid TT\ncan use any 4.0mm drill\n1 full rotation = 10 mm\n*must complete 1 fullrotation. MAX 3 rotations"
}], body: 'Body 5', id: 5
},
{
  productName: "Omega", categories:[
  {
    name: "Omega, 3.9mm PEEK Knotless Anchor System, Single",
    // "pn": "3910-500-391",
    id:"3910-22",
    // "img_url": "",
    // "MATERIAL": "PEEK",
    // "IMPLANT_LENGTH": "12.5mm",
    // "IMPLANT_WIDTH": "3.9mm",
    // "POSITIVE_STOP": "Distal laser line flush w/ surface",
    // "IMPLANT_DRILL_DEPTH": "Drill (3910-500-393): 20mm (drill flutes to laserline)\nAwl (3910-500-395): 20mm\nTap(3910-500-394): 16mm",
    // "IMPLANT_DRILL_WIDTH": "Drill (3910-500-393): 2.85mm\nAwl (3910-500-395): 2.85mm\nTap (3910-500-394): Major diameter - 3.9mm, Minor Diameter - 2.8mm",
    // "PULL OUT STRENGTH": "?",
    // "NOTES": "max: 4 #2 sutures, 5 1.2mm sutures, or 3 2.0mm tape"
},
{
    name: "Omega, 3.9mm PEEK Knotless Anchor System, Double-Double",
    // "pn": "3910-500-392",
    id:"3910-23",
    // "img_url": "",
    // "MATERIAL": "PEEK",
    // "IMPLANT_LENGTH": "12.5mm",
    // "IMPLANT_WIDTH": "3.9mm",
    // "POSITIVE_STOP": "Distal laser line flush w/ surface",
    // "IMPLANT_DRILL_DEPTH": "Drill (3910-500-393): 20mm (drill flutes to laserline)\nAwl (3910-500-395): 20mm\nTap(3910-500-394): 16mm",
    // "IMPLANT_DRILL_WIDTH": "Drill (3910-500-393): 2.85mm\nAwl (3910-500-395): 2.85mm\nTap (3910-500-394): Major diameter - 3.9mm, Minor Diameter - 2.8mm",
    // "PULL_OUT_STRENGTH": "?",
    // "NOTES": "max: 4 #2 sutures, 5 1.2mm sutures, or 3 2.0mm tape"
},
{
    name: "Omega, 4.75mm PEEK Knotless Anchor System, Single",
    // "pn":"3910-500-471",
    id:"3910-24",
    // "img_url": "",
    // "MATERIAL": "PEEK",
    // "IMPLANT_LENGTH": "14mm",
    // "IMPLANT_WIDTH": "4.75mm",
    // "POSITIVE_STOP": "Distal laser line flush w/ surface",
    // "IMPLANT_DRILL_DEPTH": "Drill (3910-500-473): 20mm (drill flutes to laserline)\nAwl (3910-500-475): 20mm\nTap (3910-500-474): 18mm",
    // "IMPLANT_DRILL_WIDTH": "Drill (3910-500-473): 3.4mm\nAwl (3910-500-475): 3.6mm\nTap (3910-500-474): Major diameter - 4.75mm, Minor Diameter - 3.5mm",
    // "PULL_OUT_STRENGTH": "?",
    // "NOTES": "max: 4 #2 sutures, 5 1.2mm sutures, or 3 2.0mm tape"
},
{
    "name": "Omega, 4.75mm PEEK Knotless Anchor System, Double-Double",
    // "pn":"3910-500-472",
    id:"3910-25",
    // "img_url": "",
    // "MATERIAL": "PEEK",
    // "IMPLANT_LENGTH": "14mm",
    // "IMPLANT_WIDTH": "4.75mm",
    // "POSITIVE_STOP": "Distal laser line flush w/ surface",
    // "IMPLANT_DRILL_DEPTH": "Drill (3910-500-473): 20mm (drill flutes to laserline)\nAwl (3910-500-475): 20mm\nTap (3910-500-474): 18mm",
    // "IMPLANT_DRILL_WIDTH": "Drill (3910-500-473): 3.4mm\nAwl (3910-500-475): 3.6mm\nTap (3910-500-474): Major diameter - 4.75mm, Minor Diameter - 3.5mm",
    // "PULL_OUT_STRENGTH": "?",
    // "NOTES": "max: 4 #2 sutures, 5 1.2mm sutures, or 3 2.0mm tape"
},
{
    "name": "Omega, 6.5mm PEEK Knotless Anchor + Eyelet, Single",
    // "pn": "3910-500-652",
    id:"3910-26",
    // "img_url": "",
    // "MATERIAL": "PEEK",
    // "IMPLANT_LENGTH": "14mm",
    // "IMPLANT_WIDTH": "6.5mm",
    // "POSITIVE_STOP": "Distal laser line flush w/ surface",
    // "IMPLANT_DRILL_DEPTH": "Drill (3910-500-473): 20mm (drill flutes to laserline)\nAwl (3910-500-475): 20mm\nTap (3910-500-474): 18mm",
    // "IMPLANT_DRILL_WIDTH": "Drill (3910-500-473): 3.4mm\nAwl (3910-500-475): 3.6mm\nTap (3910-500-474): Major diameter - 4.75mm, Minor Diameter - 3.5mm",
    // "PULL_OUT_STRENGTH": "?",
    // "NOTES": "max: 4 #2 sutures, 5 1.2mm sutures, or 3 2.0mm tape"
},
{
    "name": "Omega, 6.5mm PEEK Knotless Anchor, Single",
    // "pn": "3910-500-653",
    id:"3910-26a",
    // "img_url": "",
    // "MATERIAL": "PEEK",
    // "IMPLANT_LENGTH": "14mm",
    // "IMPLANT_WIDTH": "6.5mm",
    // "POSITIVE_STOP": "Distal laser line flush w/ surface",
    // "IMPLANT_DRILL_DEPTH": "Drill (3910-500-393): 28mm (drill flutes to laserline)\nAwl (3910-500-395): 20mm\nTap(3910-500-394): 16mm",
    // "IMPLANT_DRILL_WIDTH": "Drill (3910-500-393): 2.85mm\nAwl (3910-500-395): 2.85mm\nTap (3910-500-394): Majordiameter - 3.9mm, Minor Diameter - 2.8mm",
    // "PULL_OUT_STRENGTH": "?",
    // "NOTES": "max: 4 #2 sutures, 5 1.2mm sutures, or 3 2.0mm tape"
}], body: 'Body 6', id: 6
},
{
  productName: "Biosteon Intraline", categories:[
    {
      name: "BIOSTEON INTRALINE ANCHOR 4.5mm - 2 suture \n without needles",
      // "pn": "3910-200-080",
      id:"3910-27",
      // "img_url": "",
      // "MATERIAL": "HA (25%)/PLLA (75%)\nhydroxyapatite and non-crystalline poly-L-lactide",
      // "IMPLANT_LENGTH": "10.8 mm",
      // "IMPLANT_WIDTH": "4.5mm ",
      // "POSITIVE_STOP": "laser line",
      // "IMPLANT_DRILL_DEPTH": "laser line",
      // "IMPLANT_DRILL_WIDTH": "4.5 Punchtap (3910-002-045): Major diameter - 4.9mm, Minor diameter - 3.8mm",
      // "PULL_OUT_STRENGTH": "?",
      // "NOTES": "when using tap in normal/soft bone: beginning of depth marker is flush with the cortex; in hard bone: endof the depth marker is flush with the cortex"
  },
  {
      name: "BIOSTEON INTRALINE ANCHOR 5.5mm - 2 suture \n with needles",
      // "pn": "3910-200-082",
      id:"3910-27",
      // "img_url": "",
      // "MATERIAL": "HA (25%)/PLLA (75%)\nhydroxyapatite and non-crystalline poly-L-lactide",
      // "IMPLANT_LENGTH": "10.8mm",
      // "IMPLANT_WIDTH": "5.5mm",
      // "POSITIVE_STOP": "laser line",
      // "IMPLANT_DRILL_DEPTH": "laser line",
      // "IMPLANT_DRILL_WIDTH": "5.5 Punchtap (3910-002-055): Major diameter - 5.9mm, Minor diameter - 4.6mm",
      // "PULL_OUT_STRENGTH": "95 lb",
      // "NOTES": "when using tap:\nin normal/soft bone: beginning of depth marker is flush with the cortex\nin hard bone:end of the depth marker is flush with the cortex"
  },
  {
      name: "BIOSTEON INTRALINE ANCHOR 5.5mm - 2 suture \n without needles",
      // "pn": "3910-200-081",
      id:"3910-29",
      // "img_url": "",
      // "MATERIAL": "HA (25%)/PLLA (75%)\nhydroxyapatite and non-crystalline poly-L-lactide",
      // "IMPLANT_LENGTH": "10.8mm",
      // "IMPLANT_WIDTH": "5.5mm",
      // "POSITIVE_STOP": "laser line",
      // "IMPLANT_DRILL_DEPTH": "laser line",
      // "IMPLANT_DRILL_WIDTH": "5.5 Punchtap (3910-002-055): Major diameter - 5.9mm, Minor diameter - 4.6mm",
      // "PULL_OUT_STRENGTH": "95 lb",
      // "NOTES": "when using tap:\nin normal/soft bone: beginning of depth marker is flush with the cortex\nin hard bone:end of the depth marker is flush with the cortex"
  },
  {
      name: "BIOSTEON INTRALINE ANCHOR 5.5mm - 3 suture \n without needles",
      // "pn": "3910-200-083",
      id:"3910-30",
      // "img_url": "",
      // "MATERIAL": "HA (25%)/PLLA (75%)\nhydroxyapatite and non-crystalline poly-L-lactide",
      // "IMPLANT_LENGTH": "10.8mm",
      // "IMPLANT_WIDTH": "5.5mm",
      // "POSITIVE_STOP": "laser line",
      // "IMPLANT_DRILL_DEPTH": "laser line",
      // "IMPLANT_DRILL_WIDTH": "5.5 Punchtap (3910-002-055): Major diameter - 5.9mm, Minor diameter - 4.6mm",
      // "PULL_OUT_STRENGTH": "95 lb",
      // "NOTES": "when using tap:\nin normal/soft bone: beginning of depth marker is flush with the cortex\nin hard bone:end of the depth marker is flush with the cortex"
  },
  {
      name: "BIOSTEON INTRALINE ANCHOR 6.5mm - 2 suture \n with needles",
      // "pn":"3910-200-085",
      id:"3910-31",
      // "img_url": "",
      // "MATERIAL": "HA/PLA\nhydroxyapatite and non-crystalline poly-L-lactide",
      // "IMPLANT_LENGTH": "10.8mm",
      // "IMPLANT_WIDTH": "6.5mm",
      // "POSITIVE_STOP": "laser line",
      // "IMPLANT_DRILL_DEPTH": "laser line",
      // "IMPLANT_DRILL_WIDTH": "6.5 Punchtap (3910-002-065): Major diameter - 6.9mm, Minor diameter - 4.6mm",
      // "PULL_OUT_STRENGTH": "?",
      // "NOTES": "when using tap:\nin normal/soft bone: beginning of depth marker is flush with the cortex\nin hard bone:end of the depth marker is flush with the cortex"
  },
  {
      name: "BIOSTEON INTRALINE ANCHOR 6.5mm - 2 suture \n without needles",
      // "pn":"3910-200-084",
      id:"3910-32",
      // "img_url": "",
      // "MATERIAL": "HA/PLA\nhydroxyapatite and non-crystalline poly-L-lactide",
      // "IMPLANT_LENGTH": "10.8mm",
      // "IMPLANT_WIDTH": "6.5mm",
      // "POSITIVE_STOP": "laser line",
      // "IMPLANT_DRILL_DEPTH": "laser line",
      // "IMPLANT_DRILL_WIDTH": "6.5 Punchtap (3910-002-065): Major diameter - 6.9mm, Minor diameter - 4.6mm",
      // "PULL_OUT_STRENGTH": "?",
      // "NOTES": "when using tap:\nin normal/soft bone: beginning of depth marker is flush with the cortex\nin hard bone:end of the depth marker is flush with the cortex"
  },
  {
      name: "BIOSTEON INTRALINE ANCHOR 6.5mm - 3 suture \n without needles",
      // "pn":"3910-200-086",
      id:"3910-33",
      // "img_url": "",
      // "MATERIAL": "HA/PLA\nhydroxyapatite and non-crystalline poly-L-lactide",
      // "IMPLANT_LENGTH": "10.8mm",
      // "IMPLANT_WIDTH": "6.5mm",
      // "POSITIVE_STOP": "laser line",
      // "IMPLANT_DRILL_DEPTH": "laser line",
      // "IMPLANT_DRILL_WIDTH": "6.5 Punchtap (3910-002-065): Major diameter - 6.9mm, Minor diameter - 4.6mm",
      // "PULL_OUT_STRENGTH": "?",
      // "NOTES": "when using tap:\nin normal/soft bone: beginning of depth marker is flush with the cortex\nin hard bone:end of the depth marker is flush with the cortex"
  }
  ], body: 'Body 7', id: 7
},
{
  productName: "Knotilus Anchor", categories:[
  {
    name: "KNOTILUS ANCHOR",
    // "pn": "3910-500-100",
    id:"3910-34",
    // "img_url": "",
    // "MATERIAL": "PEEK",
    // "IMPLANT_LENGTH": "10.5mm",
    // "IMPLANT_WIDTH": "Anchor follows a wedge design of 2.4mm to 2.9mm",
    // "POSITIVE_STOP": "Between two laser lines",
    // "IMPLANT_DRILL_DEPTH": "\n8mm",
    // "IMPLANT_DRILL_WIDTH": "3.5 step drill\n3910-500-104\nDiameter - 3.7mm",
    // "PULL_OUT_STRENGTH": "56.8 lb",
    // "NOTES": "implant loop: (25mm) 3910-500-107"
}], body: 'Body 8', id: 8
},
{
  productName: "PEEK Zip", categories:[
  {
    name: "PEEK ZIP, 5.5mm",
    // "pn": "3910-200-035",
    id:"3910-35",
    // "img_url": "",
    // "MATERIAL": "PEEK",
    // "IMPLANT_LENGTH": "13.5mm",
    // "IMPLANT_WIDTH": "5.5mm",
    // "POSITIVE_STOP": "Laser line",
    // "IMPLANT_DRILL_DEPTH": "15.2mm",
    // "IMPLANT_DRILL_WIDTH": " ",
    // "PULL_OUT_STRENGTH": "89.9 lb",
    // "NOTES": "2 #2 Force Fiber, fully cannulated"
},
{
    name: "PEEK ZIP, 5.5mm \n with needles ",
    // "pn": "3910-200-030",
    id:"3910-36",
    // "img_url": "",
    // "MATERIAL": "PEEK",
    // "IMPLANT_LENGTH": "13.5mm",
    // "IMPLANT_WIDTH": "5.5mm",
    // "POSITIVE_STOP": "Laser line",
    // "IMPLANT_DRILL_DEPTH": "15.2mm",
    // "IMPLANT_DRILL_WIDTH": " ",
    // "PULL_OUT_STRENGTH": "89.9 lb",
    // "NOTES": "2 #2 Force Fiber, fully cannulated"
},
{
    name: "PEEK ZIP, 6.5mm",
    // "pn":"3910-200-075",
    id:"3910-37",
    // "img_url": "",
    // "MATERIAL": "PEEK",
    // "IMPLANT_LENGTH": "13.5mm",
    // "IMPLANT_WIDTH": "6.5mm",
    // "POSITIVE_STOP": "Laser line",
    // "IMPLANT_DRILL_DEPTH": "15.2mm",
    // "IMPLANT_DRILL_WIDTH": "H/A: 4mm Zip Drill \n3910-004-040",
    // "PULL_OUT_STRENGTH": "93.3 lb",
    // "NOTES": "2 #2 Force Fiber, fully cannulated"
},
{
    name: "PEEK ZIP, 6.5mm with needles",
    // "pn":"3910-200-070",
    id:"3910-38",
    // "img_url": "",
    // "MATERIAL": "PEEK",
    // "IMPLANT_LENGTH": "13.5mm",
    // "IMPLANT_WIDTH": "6.5mm",
    // "POSITIVE_STOP": "Laser line",
    // "IMPLANT_DRILL_DEPTH": "15.2mm",
    // "IMPLANT_DRILL_WIDTH": "H/A: 4mm Zip Drill \n3910-004-040",
    // "PULL_OUT_STRENGTH": "93.3 lb",
    // "NOTES": "2 #2 Force Fiber, fully cannulated"
}], body: 'Body 9', id: 9
},
{
  productName: "PEEK Intraline", categories:[
  {
      name: "PEEK INTRALINE ANCHOR, 5.5mm",
      // "pn":"3910-400-010",
      id:"3910-39",
      // "img_url": "",
      // "MATERIAL": "PEEK",
      // "IMPLANT_LENGTH": "16.9mm",
      // "IMPLANT_WIDTH": "5.5mm",
      // "POSITIVE_STOP": "Laser line",
      // "IMPLANT_DRILL_DEPTH": "19.7mm",
      // "IMPLANT_DRILL_WIDTH": "5.5mm Punch-Tap\n3910-004-055",
      // "PULL_OUT_STRENGTH": "65 lb",
      // "NOTES": "fully threaded, 2 #2 Force Fiber, suture eyelet"
  },
  {
      name: "PEEK INTRALINE ANCHOR, 5.5mm \n with needles",
      // "pn":"3910-400-015",
      id:"3910-40",
      // "img_url": "",
      // "MATERIAL": "PEEK",
      // "IMPLANT_LENGTH": "16.9mm",
      // "IMPLANT_WIDTH": "5.5mm",
      // "POSITIVE_STOP": "Laser line",
      // "IMPLANT_DRILL_DEPTH": "19.7mm",
      // "IMPLANT_DRILL_WIDTH": "5.5mm Punch-Tap\n3910-004-055",
      // "PULL_OUT_STRENGTH": "65 lb",
      // "NOTES": "fully threaded, 2 #2 Force Fiber, suture eyelet"
  },
  {
      name: "PEEK INTRALINE ANCHOR, 6.5mm",
      // "pn":"3910-400-020",
      id:"3910-41",
      // "img_url": "",
      // "MATERIAL": "PEEK",
      // "IMPLANT_LENGTH": "16.9mm",
      // "IMPLANT_WIDTH": "6.5mm",
      // "POSITIVE_STOP": "Laser line",
      // "IMPLANT_DRILL_DEPTH": "19.7mm",
      // "IMPLANT_DRILL_WIDTH": "6.5mm Punch-Tap\n3910-004-060",
      // "PULL_OUT_STRENGTH": "84.5 lb",
      // "NOTES": "fully threaded, 2 #2 Force Fiber, suture eyelet"
  },
  {
      name: "PEEK INTRALINE ANCHOR, 6.5mm \n with needles",
      // "pn":"3910-400-025",
      id:"3910-42",
      // "img_url": "",
      // "MATERIAL": "PEEK",
      // "IMPLANT_LENGTH": "16.9mm",
      // "IMPLANT_WIDTH": "6.5mm",
      // "POSITIVE_STOP": "Laser line",
      // "IMPLANT_DRILL_DEPTH": "19.7mm",
      // "IMPLANT_DRILL_WIDTH": "6.5mm Punch-Tap\n3910-004-060",
      // "PULL_OUT_STRENGTH": "84.5 lb",
      // "NOTES": "fully threaded, 2 #2 Force Fiber, suture eyelet"
  }]
  , body: 'Body 10', id: 10
},
{
  productName: "Twinloop", categories:[
    {
      name: "TWINLOOP - 1 No. 2 force fiber",
      // "pn": "3910-400-035",
      id:"3910-43",
      // "img_url": "",
      // "MATERIAL": "PEEK",
      // "IMPLANT_LENGTH": "10.5mm",
      // "IMPLANT_WIDTH": "3.5mm",
      // "POSITIVE_STOP": "Yes",
      // "IMPLANT_DRILL_DEPTH": "24.2mm",
      // "IMPLANT_DRILL_WIDTH": "Spade Tip Drill (3910-400-001)\n2.54mm",
      // "PULL_OUT_STRENGTH": "57.5 lb",
      // "NOTES": "one strand #2 force fiber \nwedge design of 2.4 mm to 2.9mm"
  },
  {
      name: "TWINLOOP - SE 1 No. 2 force fiber",
      // "pn": "3910-400-135",
      id:"3910-44",
      // "img_url": "",
      // "MATERIAL": "PEEK",
      // "IMPLANT_LENGTH": "10.5mm",
      // "IMPLANT_WIDTH": "3.5mm",
      // "POSITIVE_STOP": "Yes",
      // "IMPLANT_DRILL_DEPTH": "24.2mm",
      // "IMPLANT_DRILL_WIDTH": "Spade Tip Drill (3910-400-001)\n2.54mm",
      // "PULL_OUT_STRENGTH": "57.5 lb",
      // "NOTES": "one strand #2 force fiber \nwedge design of 2.4 mm to 2.9mm"
  },
  {
      name: "TWINLOOP - SE 2 No. 2 forcefiber",
      // "pn": "3910-400-235",
      id:"3910-45",
      // "img_url": "",
      // "MATERIAL": "PEEK",
      // "IMPLANT_LENGTH": "10.5mm",
      // "IMPLANT_WIDTH": "3.5mm",
      // "POSITIVE_STOP": "Yes",
      // "IMPLANT_DRILL_DEPTH": "24.2mm",
      // "IMPLANT_DRILL_WIDTH": "Spade Tip Drill (3910-400-001)\n2.54mm",
      // "PULL_OUT_STRENGTH": "57.5 lb",
      // "NOTES": "one strand #2 force fiber \nwedge design of 2.4 mm to 2.9mm"
  },
  {
      name: "TWINLOOP FLEX - single strand",
      // "pn":"3910-405-638",
      id:"3910-46",
      // "img_url": "",
      // "MATERIAL": "PEEK",
      // "IMPLANT_LENGTH": "10.5mm",
      // "IMPLANT_WIDTH": "3.5mm",
      // "POSITIVE_STOP": "Yes",
      // "IMPLANT_DRILL_DEPTH": "16.6mm",
      // "IMPLANT_DRILL_WIDTH": "Drill (3910-400-100)\nproximal end: 3.7mm\ndistal end:  2.54mm",
      // "PULL_OUT_STRENGTH": "57.5 lb",
      // "NOTES": "one strand #2 force fiber\n wedge design of 2.4 mm to 2.9mm"
  },
  {
      name: "TWINLOOP FLEX - double strand",
      // "pn":"3910-405-838",
      id:"3910-47",
      // "img_url": "",
      // "MATERIAL": "PEEK",
      // "IMPLANT_LENGTH": "10.5mm",
      // "IMPLANT_WIDTH": "3.5mm",
      // "POSITIVE_STOP": "Yes",
      // "IMPLANT_DRILL_DEPTH": "16.6mm",
      // "IMPLANT_DRILL_WIDTH": "Drill (3910-400-100)\nproximal end: 3.7mm\ndistal end:  2.54mm",
      // "PULL_OUT_STRENGTH": "57.5 lb",
      // "NOTES": "one strand #2 force fiber\n wedge design of 2.4 mm to 2.9mm"
  },
  {
      name: "TWINLOOP FLEX - SE single strand",
      // "pn":"3910-405-738",
      id:"3910-48",
      // "img_url": "",
      // "MATERIAL": "PEEK",
      // "IMPLANT_LENGTH": "10.5mm",
      // "IMPLANT_WIDTH": "3.5mm",
      // "POSITIVE_STOP": "Yes",
      // "IMPLANT_DRILL_DEPTH": "16.6mm",
      // "IMPLANT_DRILL_WIDTH": "Drill (3910-400-100)\nproximal end: 3.7mm\ndistal end:  2.54mm",
      // "PULL_OUT_STRENGTH": "57.5 lb",
      // "NOTES": "one strand #2 force fiber\n wedge design of 2.4 mm to 2.9mm"
  }
  ], body: 'Body 11', id: 11
},
{
  productName: "Titanium Intraline", categories:[
    {
      name: "TITANIUM INTRALINE ANCHOR 5.5mm",
      // "pn":"3910-400-050",
      id:"3910-49",
      // "img_url": "",
      // "MATERIAL": "Titanium",
      // "IMPLANT_LENGTH": "17.1mm",
      // "IMPLANT_WIDTH": "5.5mm",
      // "POSITIVE_STOP": "Laser line flush w/ bone or Dr.'s discretion",
      // "IMPLANT_DRILL_DEPTH": "self tapping",
      // "IMPLANT_DRILL_WIDTH": "self tapping",
      // "PULL_OUT_STRENGTH": "90.3 lb",
      // "NOTES": "2 force fibers\nfully threaded, fully cannulated"
  },
  {
      name: "TITANIUM INTRALINE ANCHOR 5.5mm with needles",
      // "pn":"3910-400-055",
      id:"3910-50",
      // "img_url": "",
      // "MATERIAL": "Titanium",
      // "IMPLANT_LENGTH": "17.1mm",
      // "IMPLANT_WIDTH": "5.5mm",
      // "POSITIVE_STOP": "Laser line flush w/ bone or Dr.'s discretion",
      // "IMPLANT_DRILL_DEPTH": "self tapping",
      // "IMPLANT_DRILL_WIDTH": "self tapping",
      // "PULL_OUT_STRENGTH": "90.3 lb",
      // "NOTES": "2 force fibers\nfully threaded, fully cannulated"
  },
  {
      name: "TITANIUM INTRALINE ANCHOR 6.5mm",
      // "pn":"3910-400-060",
      id:"3910-51",
      // "img_url": "",
      // "MATERIAL": "Titanium",
      // "IMPLANT_LENGTH": "17.1mm",
      // "IMPLANT_WIDTH": "6.5mm",
      // "POSITIVE_STOP": "Laser line flush w/ bone or Dr.'s discretion",
      // "IMPLANT_DRILL_DEPTH": "self tapping",
      // "IMPLANT_DRILL_WIDTH": "self tapping",
      // "PULL_OUT_STRENGTH": "96.6 lb",
      // "NOTES": "2 force fibers\nfully threaded, fully cannulated"
  },
  {
      name: "TITANIUM INTRALINE ANCHOR 6.5mm with needles",
      // "pn":"3910-400-065",
      id:"3910-52",
      // "img_url": "",
      // "MATERIAL": "Titanium",
      // "IMPLANT_LENGTH": "17.1mm",
      // "IMPLANT_WIDTH": "6.5mm",
      // "POSITIVE_STOP": "Laser line flush w/ bone or Dr.'s discretion",
      // "IMPLANT_DRILL_DEPTH": "self tapping",
      // "IMPLANT_DRILL_WIDTH": "self tapping",
      // "PULL_OUT_STRENGTH": "96.6 lb",
      // "NOTES": "2 force fibers\nfully threaded, fully cannulated"
  }
  ], body: 'Body 12', id: 12
},
{
  productName: "Titanium Wedge Anchor", categories:[
    {
      name: "TITANIUM WEDGE ANCHOR, 6.5mm\nDouble strand with #2 braided polyester suture\n two independent sutures",
      // "pn":"3910-100-040",
      id:"3910-53",
      // "img_url": "",
      // "MATERIAL": "Titanium",
      // "IMPLANT_LENGTH": "12.4mm",
      // "IMPLANT_WIDTH": "6.5mm",
      // "POSITIVE_STOP": "Laser mark",
      // "IMPLANT_DRILL_DEPTH": "",
      // "IMPLANT_DRILL_WIDTH": "",
      // "PULL_OUT_STRENGTH": "",
      // "NOTES": ""
  },
  {
      name: "TITANIUM WEDGE ANCHOR, 6.5mm\nDouble strand with #2 FF suture",
      // "pn":"3910-100-045",
      id:"3910-54",
      // "img_url": "",
      // "MATERIAL": "Titanium",
      // "IMPLANT_LENGTH": "12.4mm",
      // "IMPLANT_WIDTH": "6.5mm",
      // "POSITIVE_STOP": "Laser mark",
      // "IMPLANT_DRILL_DEPTH": "",
      // "IMPLANT_DRILL_WIDTH": "",
      // "PULL_OUT_STRENGTH": "",
      // "NOTES": ""
  },
  {
      name: "TITANIUM WEDGE ANCHOR, 6.5mm\nDouble strand #2 sutures\n with needles",
      // "pn":"3910-100-145",
      id:"3910-55",
      // "img_url": "",
      // "MATERIAL": "Titanium",
      // "IMPLANT_LENGTH": "12.4mm",
      // "IMPLANT_WIDTH": "6.5mm",
      // "POSITIVE_STOP": "Laser mark",
      // "IMPLANT_DRILL_DEPTH": "",
      // "IMPLANT_DRILL_WIDTH": "",
      // "PULL_OUT_STRENGTH": "",
      // "NOTES": ""
  },
  {
      name: "TITANIUM WEDGE ANCHOR, 5.0mm\nDouble strand with #2 braided polyester suture",
      // "pn":"3910-100-020",
      id:"3910-56",
      // "img_url": "",
      // "MATERIAL": "Titanium",
      // "IMPLANT_LENGTH": "10.2mm",
      // "IMPLANT_WIDTH": "5.0mm",
      // "POSITIVE_STOP": "Laser mark",
      // "IMPLANT_DRILL_DEPTH": "",
      // "IMPLANT_DRILL_WIDTH": "",
      // "PULL_OUT_STRENGTH": "",
      // "NOTES": ""
  },
  {
      name: "TITANIUM WEDGE ANCHOR, 5.0mm\nDouble strand with #2 braided polyester suture\n two independent sutures",
      // "pn":"3910-100-030",
      id:"3910-57",
      // "img_url": "",
      // "MATERIAL": "Titanium",
      // "IMPLANT_LENGTH": "10.2mm",
      // "IMPLANT_WIDTH": "5.0mm",
      // "POSITIVE_STOP": "Laser mark",
      // "IMPLANT_DRILL_DEPTH": "",
      // "IMPLANT_DRILL_WIDTH": "",
      // "PULL_OUT_STRENGTH": "",
      // "NOTES": ""
  },
  {
      name: "TITANIUM WEDGE ANCHOR, 5.0mm\nDouble strand with #2 FF suture",
      // "pn":"3910-100-035",
      id:"3910-58",
      // "img_url": "",
      // "MATERIAL": "Titanium",
      // "IMPLANT_LENGTH": "10.2mm",
      // "IMPLANT_WIDTH": "5.0mm",
      // "POSITIVE_STOP": "Laser mark",
      // "IMPLANT_DRILL_DEPTH": "",
      // "IMPLANT_DRILL_WIDTH": "",
      // "PULL_OUT_STRENGTH": "",
      // "NOTES": ""
  },
  {
      name: "TITANIUM WEDGE ANCHOR, 5.0mm\nDouble strand with #2 FF suture\n with needles",
      // "pn":"3910-100-135",
      id:"3910-59",
      // "img_url": "",
      // "MATERIAL": "Titanium",
      // "IMPLANT_LENGTH": "10.2mm",
      // "IMPLANT_WIDTH": "5.0mm",
      // "POSITIVE_STOP": "Laser mark",
      // "IMPLANT_DRILL_DEPTH": "",
      // "IMPLANT_DRILL_WIDTH": "",
      // "PULL_OUT_STRENGTH": "",
      // "NOTES": ""
  },
  {
      name: "TITANIUM WEDGE ANCHOR, 3.0mm\nSingle strand w/ #2 braided polyester suture",
      // "pn":"3910-100-010",
      id:"3910-60",
      // "img_url": "",
      // "MATERIAL": "Titanium",
      // "IMPLANT_LENGTH": "8.3mm",
      // "IMPLANT_WIDTH": "3.0mm",
      // "POSITIVE_STOP": "Laser mark",
      // "IMPLANT_DRILL_DEPTH": "",
      // "IMPLANT_DRILL_WIDTH": "",
      // "PULL_OUT_STRENGTH": "",
      // "NOTES": ""
  },
  {
      name: "TITANIUM WEDGE ANCHOR, 3.0mm\nSingle strand w/ #2 FF",
      // "pn":"3910-100-015",
      id:"3910-61",
      // "img_url": "",
      // "MATERIAL": "Titanium",
      // "IMPLANT_LENGTH": "8.3mm",
      // "IMPLANT_WIDTH": "3.0mm",
      // "POSITIVE_STOP": "Laser mark",
      // "IMPLANT_DRILL_DEPTH": "",
      // "IMPLANT_DRILL_WIDTH": "",
      // "PULL_OUT_STRENGTH": "",
      // "NOTES": ""
  }
  ], body: 'Body 13', id: 13
}]},{featureName: "Arthro Specs", categories:[{ name: 'Capital'}, { name: 'Disposables'}, { name: 'Replacement Parts'}], id: 3, productList: [
    { productName: 'Suction Probe', categories:[
      {
        name: "90-S Cruise",
        // "pn": "0279401200",
        id: "0279401200",
        // "suction": true,
        // "small_joint":false,
        // "length": "135 mm",
        // "outer_diameter": "4.0 mm",
        // "cut_max": "11",
        // "cut_default": "9",
        // "coag": "4"
     },
    {
           name: "90-S Accelerator",
          //  "pn": "0279351400",
          id: "0279351400",
          //  "suction": true,
          //  "small_joint":false,
          //  "length": "135 mm",
          //  "outer_diameter": "4.0 mm",
          //  "cut_max": "11",
          //  "cut_default": "9",
          //  "coag": "4"
        },
    {
          name: "90-S Max",
          //  "pn": "0279401100",
          id: "0279401100",
          //  "suction": true,
          //  "small_joint":false,
          //  "length": "135 mm",
          //  "outer_diameter": "4.0 mm",
          //  "cut_max": "11",
          //  "cut_default": "9",
          //  "coag": "5"
        },

        {
           name: "90-S",
          //  "pn": "0279351100",
          id: "0279351100",
          //  "suction": true,
          //  "small_joint":false,
          //  "length": "135 mm",
          //  "outer_diameter": "3.5 mm",
          //  "cut_max": "11",
          //  "cut_default": "9",
          //  "coag": "4"
        },
        {
           name: "90-S XL",
          //  "pn": "0279350502",
          id: "0279350502",
          //  "suction": true,
          //  "small_joint":false,
          //  "length": "180 mm",
          //  "outer_diameter": "3.5 mm",
          //  "cut_max": "7",
          //  "cut_default": "5",
          //  "coag": "3"
        },
        {
          name: "50-S",
          // "pn": "0279351250",
          id: "0279351250",
          // "suction": true,
          // "small_joint":false,
          // "length": "135 mm",
          // "outer_diameter": "3.5 mm",
          // "cut_max": "11",
          // "cut_default": "9",
          // "coag": "3"
       },
       {
          name: "50-S XL",
          // "pn": "0279351235",
          id: "0279351235",
          // "suction": true,
          // "small_joint":false,
          // "length": "180 mm",
          // "outer_diameter": "3.5 mm",
          // "cut_max": "11",
          // "cut_default": "9",
          // "coag": "3"
       },
       {
          name: "30-S",
          // "pn": "0279351230",
          id: "0279351230",
          // "suction": true,
          // "small_joint":false,
          // "length": "135 mm",
          // "outer_diameter": "3.5 mm",
          // "cut_max": "11",
          // "cut_default": "9",
          // "coag": "3"
       },
       {
          name: "50-S Sweep +",
          // "pn": "0279351650",
          id: "0279351650",
          // "suction": true,
          // "small_joint":false,
          // "length": "135 mm",
          // "outer_diameter": "3.5 mm",
          // "cut_max": "11",
          // "cut_default": "7",
          // "coag": "4"
       },
       {
          name: "50-S Sweep + XL",
          // "pn": "0279351653",
          id: "0279351653",
          // "suction": true,
          // "small_joint":false,
          // "length": "180 mm",
          // "outer_diameter": "3.5 mm",
          // "cut_max": "11",
          // "cut_default": "7",
          // "coag": "4"
       }
    
    ], id: 1},
    { productName: 'Non-Suction Probe', categories:[
      {
        name: "Direct",
        // "pn": "0279350401",
        id: "0279350401",
        // "suction": false,
        // "small_joint":false,
        // "length": "135 mm",
        // "outer_diameter": "3.5 mm",
        // "cut_max": "6",
        // "cut_default": "5",
        // "coag": "3"
     },
     {
        name: "Lat",
        // "pn": "0279350201",
        id: "0279350201",
        // "suction": false,
        // "small_joint":false,
        // "length": "135 mm",
        // "outer_diameter": "3.5 mm",
        // "cut_max": "8",
        // "cut_default": "5",
        // "coag": "3"
     },
     {
        name: "Contour",
        // "pn": "0279350301",
        id: "0279350301",
        // "suction": false,
        // "small_joint":false,
        // "length": "135 mm",
        // "outer_diameter": "3.5 mm",
        // "cut_max": "7",
        // "cut_default": "5",
        // "coag": "3"
     },
     {
        name: "Hook",
        // "pn": "0279350501",
        id: "0279350501",
        // "suction": false,
        // "small_joint":false,
        // "length": "135 mm",
        // "outer_diameter": "3.5 mm",
        // "cut_max": "7",
        // "cut_default": "5",
        // "coag": "3"
     },
     {
        name: "Hook XL",
        // "pn": "0279351103",
        id: "0279351103",
        // "suction": false,
        // "small_joint":false,
        // "length": "180 mm",
        // "outer_diameter": "3.5 mm",
        // "cut_max": "11",
        // "cut_default": "9",
        // "coag": "4"
     }
    ], id: 2},
    { productName: 'Small Joint Probe', categories:[
      {
        name: "Aardvark",
        // "pn": "0279251101",
        id: "0279251101",
        // "suction": null,
        // "small_joint":true,
        // "length": "135 mm",
        // "outer_diameter": "2.5 mm",
        // "cut_max": "6",
        // "cut_default": "4",
        // "coag": "3"
     },
      {
        name: "Micro-Claw",
        // "pn": "0279250101",
        id: "0279250101",
        // "suction": null,
        // "small_joint":true,
        // "length": "135 mm",
        // "outer_diameter": "2.5 mm",
        // "cut_max": "6",
        // "cut_default": "4",
        // "coag": "3"
     },
     {
        name: "Micro-Brush",
        // "pn": "0279250201",
        id: "0279250201",
        // "suction": null,
        // "small_joint":true,
        // "length": "135 mm",
        // "outer_diameter": "2.5 mm",
        // "cut_max": "6",
        // "cut_default": "4",
        // "coag": "3"
     }], id: 2}
]}])



  return (
    <div className='navigation__container'>
      <NavigationComponent
        // handleNavigationClick={handleNavigationClick}
        // navigationClick={navigationClick}
        handleItemBtnClick={handleItemBtnClick} 
        itemBtn={itemBtn}
        setItemBtn={setItemBtn}
        features={features} />
        {console.log(itemBtn)}
    </div>
  )
}

export default Navigation

