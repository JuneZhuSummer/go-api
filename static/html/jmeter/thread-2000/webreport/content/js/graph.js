/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 363.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 0.0], [0.4, 0.0], [0.5, 0.0], [0.6, 0.0], [0.7, 0.0], [0.8, 1.0], [0.9, 1.0], [1.0, 1.0], [1.1, 1.0], [1.2, 1.0], [1.3, 1.0], [1.4, 1.0], [1.5, 1.0], [1.6, 1.0], [1.7, 1.0], [1.8, 1.0], [1.9, 1.0], [2.0, 1.0], [2.1, 1.0], [2.2, 1.0], [2.3, 1.0], [2.4, 1.0], [2.5, 1.0], [2.6, 1.0], [2.7, 1.0], [2.8, 1.0], [2.9, 1.0], [3.0, 1.0], [3.1, 1.0], [3.2, 1.0], [3.3, 1.0], [3.4, 1.0], [3.5, 1.0], [3.6, 1.0], [3.7, 1.0], [3.8, 1.0], [3.9, 1.0], [4.0, 1.0], [4.1, 1.0], [4.2, 1.0], [4.3, 1.0], [4.4, 1.0], [4.5, 1.0], [4.6, 1.0], [4.7, 1.0], [4.8, 1.0], [4.9, 1.0], [5.0, 1.0], [5.1, 1.0], [5.2, 1.0], [5.3, 1.0], [5.4, 1.0], [5.5, 1.0], [5.6, 1.0], [5.7, 1.0], [5.8, 1.0], [5.9, 1.0], [6.0, 1.0], [6.1, 1.0], [6.2, 1.0], [6.3, 1.0], [6.4, 1.0], [6.5, 1.0], [6.6, 1.0], [6.7, 1.0], [6.8, 1.0], [6.9, 1.0], [7.0, 1.0], [7.1, 1.0], [7.2, 1.0], [7.3, 1.0], [7.4, 1.0], [7.5, 1.0], [7.6, 1.0], [7.7, 1.0], [7.8, 1.0], [7.9, 1.0], [8.0, 1.0], [8.1, 1.0], [8.2, 1.0], [8.3, 1.0], [8.4, 1.0], [8.5, 1.0], [8.6, 1.0], [8.7, 1.0], [8.8, 1.0], [8.9, 1.0], [9.0, 1.0], [9.1, 1.0], [9.2, 1.0], [9.3, 1.0], [9.4, 1.0], [9.5, 1.0], [9.6, 1.0], [9.7, 1.0], [9.8, 1.0], [9.9, 1.0], [10.0, 1.0], [10.1, 1.0], [10.2, 1.0], [10.3, 1.0], [10.4, 1.0], [10.5, 1.0], [10.6, 1.0], [10.7, 1.0], [10.8, 1.0], [10.9, 1.0], [11.0, 1.0], [11.1, 1.0], [11.2, 1.0], [11.3, 1.0], [11.4, 1.0], [11.5, 1.0], [11.6, 1.0], [11.7, 1.0], [11.8, 1.0], [11.9, 1.0], [12.0, 1.0], [12.1, 1.0], [12.2, 1.0], [12.3, 1.0], [12.4, 1.0], [12.5, 1.0], [12.6, 1.0], [12.7, 1.0], [12.8, 1.0], [12.9, 1.0], [13.0, 1.0], [13.1, 1.0], [13.2, 1.0], [13.3, 1.0], [13.4, 1.0], [13.5, 1.0], [13.6, 1.0], [13.7, 1.0], [13.8, 1.0], [13.9, 1.0], [14.0, 1.0], [14.1, 1.0], [14.2, 1.0], [14.3, 1.0], [14.4, 1.0], [14.5, 1.0], [14.6, 1.0], [14.7, 1.0], [14.8, 1.0], [14.9, 1.0], [15.0, 1.0], [15.1, 1.0], [15.2, 1.0], [15.3, 1.0], [15.4, 1.0], [15.5, 1.0], [15.6, 1.0], [15.7, 1.0], [15.8, 1.0], [15.9, 1.0], [16.0, 1.0], [16.1, 1.0], [16.2, 1.0], [16.3, 1.0], [16.4, 1.0], [16.5, 1.0], [16.6, 1.0], [16.7, 1.0], [16.8, 1.0], [16.9, 1.0], [17.0, 1.0], [17.1, 1.0], [17.2, 1.0], [17.3, 2.0], [17.4, 2.0], [17.5, 2.0], [17.6, 2.0], [17.7, 2.0], [17.8, 2.0], [17.9, 2.0], [18.0, 2.0], [18.1, 2.0], [18.2, 2.0], [18.3, 2.0], [18.4, 2.0], [18.5, 2.0], [18.6, 2.0], [18.7, 2.0], [18.8, 2.0], [18.9, 2.0], [19.0, 2.0], [19.1, 2.0], [19.2, 2.0], [19.3, 2.0], [19.4, 2.0], [19.5, 2.0], [19.6, 2.0], [19.7, 2.0], [19.8, 2.0], [19.9, 2.0], [20.0, 2.0], [20.1, 2.0], [20.2, 2.0], [20.3, 2.0], [20.4, 2.0], [20.5, 2.0], [20.6, 2.0], [20.7, 2.0], [20.8, 2.0], [20.9, 2.0], [21.0, 2.0], [21.1, 2.0], [21.2, 2.0], [21.3, 2.0], [21.4, 2.0], [21.5, 2.0], [21.6, 2.0], [21.7, 2.0], [21.8, 2.0], [21.9, 2.0], [22.0, 2.0], [22.1, 2.0], [22.2, 2.0], [22.3, 2.0], [22.4, 2.0], [22.5, 2.0], [22.6, 2.0], [22.7, 2.0], [22.8, 2.0], [22.9, 2.0], [23.0, 2.0], [23.1, 2.0], [23.2, 2.0], [23.3, 2.0], [23.4, 2.0], [23.5, 2.0], [23.6, 3.0], [23.7, 3.0], [23.8, 3.0], [23.9, 3.0], [24.0, 3.0], [24.1, 3.0], [24.2, 3.0], [24.3, 3.0], [24.4, 3.0], [24.5, 3.0], [24.6, 3.0], [24.7, 3.0], [24.8, 3.0], [24.9, 3.0], [25.0, 3.0], [25.1, 3.0], [25.2, 3.0], [25.3, 3.0], [25.4, 3.0], [25.5, 3.0], [25.6, 3.0], [25.7, 3.0], [25.8, 3.0], [25.9, 3.0], [26.0, 3.0], [26.1, 3.0], [26.2, 3.0], [26.3, 4.0], [26.4, 4.0], [26.5, 4.0], [26.6, 4.0], [26.7, 4.0], [26.8, 4.0], [26.9, 4.0], [27.0, 4.0], [27.1, 4.0], [27.2, 4.0], [27.3, 4.0], [27.4, 5.0], [27.5, 5.0], [27.6, 5.0], [27.7, 5.0], [27.8, 5.0], [27.9, 5.0], [28.0, 5.0], [28.1, 5.0], [28.2, 5.0], [28.3, 5.0], [28.4, 5.0], [28.5, 5.0], [28.6, 5.0], [28.7, 5.0], [28.8, 5.0], [28.9, 5.0], [29.0, 6.0], [29.1, 6.0], [29.2, 6.0], [29.3, 6.0], [29.4, 6.0], [29.5, 6.0], [29.6, 6.0], [29.7, 6.0], [29.8, 6.0], [29.9, 6.0], [30.0, 6.0], [30.1, 6.0], [30.2, 6.0], [30.3, 7.0], [30.4, 7.0], [30.5, 7.0], [30.6, 7.0], [30.7, 7.0], [30.8, 7.0], [30.9, 7.0], [31.0, 8.0], [31.1, 8.0], [31.2, 8.0], [31.3, 8.0], [31.4, 8.0], [31.5, 8.0], [31.6, 9.0], [31.7, 9.0], [31.8, 9.0], [31.9, 9.0], [32.0, 9.0], [32.1, 9.0], [32.2, 9.0], [32.3, 9.0], [32.4, 10.0], [32.5, 10.0], [32.6, 10.0], [32.7, 10.0], [32.8, 10.0], [32.9, 10.0], [33.0, 10.0], [33.1, 10.0], [33.2, 11.0], [33.3, 11.0], [33.4, 11.0], [33.5, 11.0], [33.6, 11.0], [33.7, 12.0], [33.8, 12.0], [33.9, 12.0], [34.0, 12.0], [34.1, 13.0], [34.2, 13.0], [34.3, 13.0], [34.4, 13.0], [34.5, 13.0], [34.6, 13.0], [34.7, 13.0], [34.8, 13.0], [34.9, 14.0], [35.0, 14.0], [35.1, 14.0], [35.2, 14.0], [35.3, 14.0], [35.4, 15.0], [35.5, 15.0], [35.6, 16.0], [35.7, 16.0], [35.8, 17.0], [35.9, 17.0], [36.0, 17.0], [36.1, 18.0], [36.2, 18.0], [36.3, 18.0], [36.4, 18.0], [36.5, 18.0], [36.6, 19.0], [36.7, 19.0], [36.8, 19.0], [36.9, 19.0], [37.0, 19.0], [37.1, 19.0], [37.2, 19.0], [37.3, 19.0], [37.4, 19.0], [37.5, 19.0], [37.6, 19.0], [37.7, 19.0], [37.8, 20.0], [37.9, 20.0], [38.0, 20.0], [38.1, 20.0], [38.2, 21.0], [38.3, 21.0], [38.4, 21.0], [38.5, 21.0], [38.6, 21.0], [38.7, 21.0], [38.8, 21.0], [38.9, 21.0], [39.0, 21.0], [39.1, 21.0], [39.2, 21.0], [39.3, 22.0], [39.4, 22.0], [39.5, 22.0], [39.6, 22.0], [39.7, 22.0], [39.8, 22.0], [39.9, 22.0], [40.0, 22.0], [40.1, 22.0], [40.2, 22.0], [40.3, 22.0], [40.4, 22.0], [40.5, 22.0], [40.6, 23.0], [40.7, 23.0], [40.8, 23.0], [40.9, 23.0], [41.0, 23.0], [41.1, 23.0], [41.2, 24.0], [41.3, 25.0], [41.4, 26.0], [41.5, 26.0], [41.6, 27.0], [41.7, 27.0], [41.8, 27.0], [41.9, 27.0], [42.0, 27.0], [42.1, 27.0], [42.2, 27.0], [42.3, 27.0], [42.4, 27.0], [42.5, 28.0], [42.6, 28.0], [42.7, 28.0], [42.8, 28.0], [42.9, 28.0], [43.0, 28.0], [43.1, 28.0], [43.2, 28.0], [43.3, 28.0], [43.4, 28.0], [43.5, 29.0], [43.6, 29.0], [43.7, 29.0], [43.8, 29.0], [43.9, 29.0], [44.0, 30.0], [44.1, 30.0], [44.2, 30.0], [44.3, 30.0], [44.4, 30.0], [44.5, 31.0], [44.6, 31.0], [44.7, 31.0], [44.8, 31.0], [44.9, 32.0], [45.0, 32.0], [45.1, 32.0], [45.2, 32.0], [45.3, 33.0], [45.4, 33.0], [45.5, 33.0], [45.6, 33.0], [45.7, 34.0], [45.8, 35.0], [45.9, 35.0], [46.0, 35.0], [46.1, 36.0], [46.2, 36.0], [46.3, 36.0], [46.4, 37.0], [46.5, 37.0], [46.6, 37.0], [46.7, 37.0], [46.8, 37.0], [46.9, 37.0], [47.0, 38.0], [47.1, 38.0], [47.2, 39.0], [47.3, 39.0], [47.4, 39.0], [47.5, 39.0], [47.6, 39.0], [47.7, 39.0], [47.8, 39.0], [47.9, 39.0], [48.0, 40.0], [48.1, 40.0], [48.2, 40.0], [48.3, 40.0], [48.4, 40.0], [48.5, 40.0], [48.6, 40.0], [48.7, 40.0], [48.8, 40.0], [48.9, 40.0], [49.0, 40.0], [49.1, 40.0], [49.2, 41.0], [49.3, 41.0], [49.4, 41.0], [49.5, 41.0], [49.6, 41.0], [49.7, 41.0], [49.8, 41.0], [49.9, 41.0], [50.0, 42.0], [50.1, 42.0], [50.2, 42.0], [50.3, 42.0], [50.4, 42.0], [50.5, 42.0], [50.6, 42.0], [50.7, 42.0], [50.8, 42.0], [50.9, 42.0], [51.0, 42.0], [51.1, 43.0], [51.2, 43.0], [51.3, 43.0], [51.4, 43.0], [51.5, 43.0], [51.6, 43.0], [51.7, 43.0], [51.8, 43.0], [51.9, 44.0], [52.0, 44.0], [52.1, 44.0], [52.2, 44.0], [52.3, 44.0], [52.4, 44.0], [52.5, 45.0], [52.6, 45.0], [52.7, 46.0], [52.8, 46.0], [52.9, 46.0], [53.0, 46.0], [53.1, 47.0], [53.2, 47.0], [53.3, 47.0], [53.4, 47.0], [53.5, 48.0], [53.6, 48.0], [53.7, 48.0], [53.8, 48.0], [53.9, 48.0], [54.0, 49.0], [54.1, 49.0], [54.2, 49.0], [54.3, 49.0], [54.4, 49.0], [54.5, 50.0], [54.6, 50.0], [54.7, 50.0], [54.8, 51.0], [54.9, 52.0], [55.0, 52.0], [55.1, 52.0], [55.2, 53.0], [55.3, 54.0], [55.4, 56.0], [55.5, 56.0], [55.6, 56.0], [55.7, 56.0], [55.8, 57.0], [55.9, 59.0], [56.0, 59.0], [56.1, 60.0], [56.2, 60.0], [56.3, 61.0], [56.4, 62.0], [56.5, 62.0], [56.6, 62.0], [56.7, 63.0], [56.8, 63.0], [56.9, 64.0], [57.0, 64.0], [57.1, 64.0], [57.2, 65.0], [57.3, 66.0], [57.4, 67.0], [57.5, 67.0], [57.6, 68.0], [57.7, 68.0], [57.8, 68.0], [57.9, 69.0], [58.0, 69.0], [58.1, 69.0], [58.2, 70.0], [58.3, 70.0], [58.4, 70.0], [58.5, 71.0], [58.6, 71.0], [58.7, 71.0], [58.8, 71.0], [58.9, 72.0], [59.0, 72.0], [59.1, 72.0], [59.2, 72.0], [59.3, 72.0], [59.4, 73.0], [59.5, 73.0], [59.6, 73.0], [59.7, 74.0], [59.8, 74.0], [59.9, 74.0], [60.0, 74.0], [60.1, 75.0], [60.2, 75.0], [60.3, 75.0], [60.4, 76.0], [60.5, 76.0], [60.6, 76.0], [60.7, 76.0], [60.8, 77.0], [60.9, 77.0], [61.0, 77.0], [61.1, 78.0], [61.2, 78.0], [61.3, 78.0], [61.4, 78.0], [61.5, 78.0], [61.6, 78.0], [61.7, 79.0], [61.8, 79.0], [61.9, 79.0], [62.0, 79.0], [62.1, 79.0], [62.2, 79.0], [62.3, 80.0], [62.4, 80.0], [62.5, 80.0], [62.6, 80.0], [62.7, 80.0], [62.8, 80.0], [62.9, 80.0], [63.0, 80.0], [63.1, 80.0], [63.2, 80.0], [63.3, 81.0], [63.4, 81.0], [63.5, 81.0], [63.6, 81.0], [63.7, 81.0], [63.8, 81.0], [63.9, 81.0], [64.0, 81.0], [64.1, 81.0], [64.2, 81.0], [64.3, 81.0], [64.4, 81.0], [64.5, 81.0], [64.6, 81.0], [64.7, 82.0], [64.8, 82.0], [64.9, 82.0], [65.0, 82.0], [65.1, 82.0], [65.2, 82.0], [65.3, 82.0], [65.4, 82.0], [65.5, 83.0], [65.6, 83.0], [65.7, 83.0], [65.8, 84.0], [65.9, 84.0], [66.0, 85.0], [66.1, 86.0], [66.2, 88.0], [66.3, 88.0], [66.4, 90.0], [66.5, 92.0], [66.6, 93.0], [66.7, 94.0], [66.8, 96.0], [66.9, 97.0], [67.0, 99.0], [67.1, 100.0], [67.2, 102.0], [67.3, 103.0], [67.4, 104.0], [67.5, 104.0], [67.6, 107.0], [67.7, 108.0], [67.8, 109.0], [67.9, 109.0], [68.0, 111.0], [68.1, 112.0], [68.2, 112.0], [68.3, 114.0], [68.4, 114.0], [68.5, 120.0], [68.6, 123.0], [68.7, 125.0], [68.8, 130.0], [68.9, 131.0], [69.0, 132.0], [69.1, 134.0], [69.2, 136.0], [69.3, 136.0], [69.4, 137.0], [69.5, 138.0], [69.6, 139.0], [69.7, 140.0], [69.8, 140.0], [69.9, 142.0], [70.0, 145.0], [70.1, 145.0], [70.2, 146.0], [70.3, 147.0], [70.4, 149.0], [70.5, 150.0], [70.6, 150.0], [70.7, 150.0], [70.8, 151.0], [70.9, 152.0], [71.0, 153.0], [71.1, 154.0], [71.2, 155.0], [71.3, 155.0], [71.4, 156.0], [71.5, 156.0], [71.6, 157.0], [71.7, 158.0], [71.8, 158.0], [71.9, 158.0], [72.0, 159.0], [72.1, 159.0], [72.2, 160.0], [72.3, 161.0], [72.4, 161.0], [72.5, 162.0], [72.6, 162.0], [72.7, 162.0], [72.8, 163.0], [72.9, 166.0], [73.0, 166.0], [73.1, 166.0], [73.2, 166.0], [73.3, 166.0], [73.4, 167.0], [73.5, 167.0], [73.6, 167.0], [73.7, 167.0], [73.8, 167.0], [73.9, 167.0], [74.0, 167.0], [74.1, 167.0], [74.2, 167.0], [74.3, 167.0], [74.4, 167.0], [74.5, 167.0], [74.6, 167.0], [74.7, 168.0], [74.8, 168.0], [74.9, 168.0], [75.0, 168.0], [75.1, 168.0], [75.2, 168.0], [75.3, 168.0], [75.4, 168.0], [75.5, 168.0], [75.6, 168.0], [75.7, 168.0], [75.8, 168.0], [75.9, 168.0], [76.0, 168.0], [76.1, 168.0], [76.2, 168.0], [76.3, 168.0], [76.4, 169.0], [76.5, 169.0], [76.6, 169.0], [76.7, 169.0], [76.8, 169.0], [76.9, 169.0], [77.0, 169.0], [77.1, 169.0], [77.2, 170.0], [77.3, 170.0], [77.4, 173.0], [77.5, 175.0], [77.6, 176.0], [77.7, 185.0], [77.8, 186.0], [77.9, 190.0], [78.0, 190.0], [78.1, 191.0], [78.2, 194.0], [78.3, 195.0], [78.4, 198.0], [78.5, 200.0], [78.6, 201.0], [78.7, 207.0], [78.8, 210.0], [78.9, 220.0], [79.0, 226.0], [79.1, 232.0], [79.2, 233.0], [79.3, 235.0], [79.4, 236.0], [79.5, 240.0], [79.6, 241.0], [79.7, 249.0], [79.8, 250.0], [79.9, 251.0], [80.0, 251.0], [80.1, 252.0], [80.2, 252.0], [80.3, 252.0], [80.4, 253.0], [80.5, 255.0], [80.6, 257.0], [80.7, 259.0], [80.8, 260.0], [80.9, 262.0], [81.0, 263.0], [81.1, 264.0], [81.2, 265.0], [81.3, 268.0], [81.4, 269.0], [81.5, 270.0], [81.6, 270.0], [81.7, 271.0], [81.8, 272.0], [81.9, 273.0], [82.0, 274.0], [82.1, 274.0], [82.2, 275.0], [82.3, 275.0], [82.4, 280.0], [82.5, 282.0], [82.6, 282.0], [82.7, 284.0], [82.8, 285.0], [82.9, 285.0], [83.0, 286.0], [83.1, 288.0], [83.2, 288.0], [83.3, 289.0], [83.4, 290.0], [83.5, 291.0], [83.6, 291.0], [83.7, 292.0], [83.8, 292.0], [83.9, 292.0], [84.0, 293.0], [84.1, 293.0], [84.2, 293.0], [84.3, 293.0], [84.4, 294.0], [84.5, 294.0], [84.6, 295.0], [84.7, 295.0], [84.8, 296.0], [84.9, 296.0], [85.0, 296.0], [85.1, 296.0], [85.2, 297.0], [85.3, 298.0], [85.4, 298.0], [85.5, 298.0], [85.6, 299.0], [85.7, 299.0], [85.8, 299.0], [85.9, 299.0], [86.0, 300.0], [86.1, 300.0], [86.2, 300.0], [86.3, 300.0], [86.4, 300.0], [86.5, 300.0], [86.6, 301.0], [86.7, 301.0], [86.8, 301.0], [86.9, 302.0], [87.0, 302.0], [87.1, 302.0], [87.2, 302.0], [87.3, 302.0], [87.4, 302.0], [87.5, 303.0], [87.6, 303.0], [87.7, 303.0], [87.8, 303.0], [87.9, 303.0], [88.0, 304.0], [88.1, 305.0], [88.2, 306.0], [88.3, 306.0], [88.4, 306.0], [88.5, 307.0], [88.6, 308.0], [88.7, 308.0], [88.8, 308.0], [88.9, 309.0], [89.0, 309.0], [89.1, 309.0], [89.2, 309.0], [89.3, 310.0], [89.4, 310.0], [89.5, 311.0], [89.6, 311.0], [89.7, 311.0], [89.8, 313.0], [89.9, 313.0], [90.0, 314.0], [90.1, 314.0], [90.2, 315.0], [90.3, 316.0], [90.4, 317.0], [90.5, 317.0], [90.6, 317.0], [90.7, 317.0], [90.8, 318.0], [90.9, 318.0], [91.0, 319.0], [91.1, 319.0], [91.2, 320.0], [91.3, 320.0], [91.4, 320.0], [91.5, 321.0], [91.6, 321.0], [91.7, 321.0], [91.8, 322.0], [91.9, 322.0], [92.0, 322.0], [92.1, 322.0], [92.2, 323.0], [92.3, 323.0], [92.4, 323.0], [92.5, 323.0], [92.6, 324.0], [92.7, 324.0], [92.8, 324.0], [92.9, 325.0], [93.0, 327.0], [93.1, 327.0], [93.2, 328.0], [93.3, 329.0], [93.4, 329.0], [93.5, 330.0], [93.6, 330.0], [93.7, 332.0], [93.8, 332.0], [93.9, 332.0], [94.0, 333.0], [94.1, 333.0], [94.2, 333.0], [94.3, 334.0], [94.4, 335.0], [94.5, 336.0], [94.6, 337.0], [94.7, 339.0], [94.8, 340.0], [94.9, 340.0], [95.0, 340.0], [95.1, 340.0], [95.2, 340.0], [95.3, 340.0], [95.4, 340.0], [95.5, 340.0], [95.6, 340.0], [95.7, 340.0], [95.8, 340.0], [95.9, 340.0], [96.0, 340.0], [96.1, 340.0], [96.2, 340.0], [96.3, 340.0], [96.4, 340.0], [96.5, 340.0], [96.6, 340.0], [96.7, 340.0], [96.8, 340.0], [96.9, 341.0], [97.0, 341.0], [97.1, 341.0], [97.2, 341.0], [97.3, 341.0], [97.4, 341.0], [97.5, 341.0], [97.6, 341.0], [97.7, 341.0], [97.8, 341.0], [97.9, 341.0], [98.0, 341.0], [98.1, 341.0], [98.2, 341.0], [98.3, 341.0], [98.4, 341.0], [98.5, 341.0], [98.6, 341.0], [98.7, 341.0], [98.8, 341.0], [98.9, 341.0], [99.0, 341.0], [99.1, 341.0], [99.2, 341.0], [99.3, 341.0], [99.4, 341.0], [99.5, 341.0], [99.6, 342.0], [99.7, 342.0], [99.8, 346.0], [99.9, 353.0]], "isOverall": false, "label": "HTTP请求", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 150.0, "minX": 0.0, "maxY": 1342.0, "series": [{"data": [[0.0, 1342.0], [300.0, 280.0], [100.0, 228.0], [200.0, 150.0]], "isOverall": false, "label": "HTTP请求", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 284.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1716.0, "series": [{"data": [[0.0, 1716.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 284.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 160.88700000000003, "minX": 1.68421134E12, "maxY": 160.88700000000003, "series": [{"data": [[1.68421134E12, 160.88700000000003]], "isOverall": false, "label": "线程组", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68421134E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 0.33333333333333337, "minX": 1.0, "maxY": 341.0, "series": [{"data": [[2.0, 1.1777777777777783], [3.0, 1.1702127659574468], [4.0, 1.4597701149425293], [5.0, 3.230769230769231], [6.0, 3.0], [7.0, 3.115384615384615], [8.0, 4.1], [9.0, 6.285714285714286], [10.0, 7.25], [11.0, 15.714285714285719], [12.0, 13.5], [13.0, 19.333333333333332], [14.0, 21.0], [15.0, 11.333333333333334], [16.0, 7.5], [17.0, 14.8], [18.0, 18.125], [19.0, 6.545454545454546], [20.0, 12.875], [21.0, 33.4], [22.0, 52.5], [23.0, 33.333333333333336], [24.0, 47.0], [25.0, 38.0], [26.0, 20.333333333333332], [27.0, 25.333333333333332], [28.0, 32.666666666666664], [29.0, 17.555555555555557], [30.0, 17.8], [31.0, 35.875], [33.0, 19.666666666666664], [32.0, 21.875], [35.0, 36.142857142857146], [34.0, 39.0], [37.0, 37.4], [36.0, 27.0], [39.0, 31.125], [38.0, 7.8], [40.0, 44.8], [41.0, 23.833333333333336], [43.0, 49.6], [42.0, 27.0], [45.0, 34.25], [44.0, 17.666666666666668], [47.0, 29.64285714285714], [46.0, 28.0], [48.0, 31.0], [49.0, 22.333333333333336], [50.0, 34.166666666666664], [51.0, 25.818181818181817], [53.0, 44.0], [52.0, 29.5], [55.0, 29.166666666666664], [54.0, 33.75], [56.0, 76.0], [57.0, 38.666666666666664], [59.0, 45.4], [60.0, 45.0], [61.0, 40.0], [63.0, 53.0], [62.0, 59.0], [67.0, 49.55555555555556], [66.0, 61.0], [64.0, 59.0], [65.0, 43.0], [69.0, 38.111111111111114], [68.0, 44.2], [71.0, 60.0], [70.0, 47.00000000000001], [74.0, 55.5], [73.0, 18.0], [72.0, 59.666666666666664], [75.0, 50.5], [79.0, 36.5], [78.0, 52.5], [76.0, 33.0], [77.0, 49.49999999999999], [81.0, 50.5], [80.0, 81.66666666666667], [83.0, 39.333333333333336], [82.0, 41.25], [87.0, 26.0], [86.0, 51.0], [84.0, 41.0], [85.0, 58.8], [90.0, 37.75], [89.0, 51.16666666666667], [88.0, 30.0], [91.0, 56.333333333333336], [95.0, 37.0], [94.0, 53.42857142857143], [93.0, 24.428571428571427], [92.0, 31.5], [97.0, 27.500000000000004], [96.0, 21.75], [98.0, 66.57142857142858], [99.0, 49.285714285714285], [103.0, 56.5], [102.0, 33.333333333333336], [100.0, 48.166666666666664], [101.0, 70.66666666666667], [107.0, 97.5], [106.0, 75.0], [104.0, 70.66666666666667], [105.0, 46.5], [111.0, 268.25], [110.0, 145.66666666666666], [109.0, 50.0], [108.0, 82.33333333333333], [113.0, 270.75], [114.0, 175.5], [112.0, 145.33333333333334], [115.0, 82.5], [116.0, 182.8], [119.0, 81.5], [117.0, 80.5], [123.0, 293.0], [122.0, 147.16666666666669], [120.0, 200.0], [121.0, 299.0], [127.0, 320.5], [125.0, 169.4], [126.0, 134.83333333333334], [124.0, 214.66666666666669], [135.0, 226.66666666666669], [134.0, 141.33333333333334], [132.0, 221.0], [130.0, 189.66666666666666], [133.0, 59.75], [129.0, 51.83333333333333], [128.0, 80.0], [143.0, 217.4], [141.0, 134.2857142857143], [138.0, 214.66666666666669], [137.0, 176.0], [142.0, 49.0], [140.0, 58.5], [139.0, 70.16666666666667], [136.0, 54.57142857142857], [150.0, 238.625], [151.0, 123.13333333333333], [149.0, 301.0], [147.0, 171.7142857142857], [148.0, 115.5], [145.0, 98.42857142857143], [144.0, 103.0], [146.0, 51.4], [159.0, 311.25], [157.0, 299.6666666666667], [158.0, 331.0], [156.0, 302.5], [154.0, 152.14285714285714], [153.0, 212.16666666666666], [152.0, 172.25], [167.0, 284.0], [166.0, 292.2], [162.0, 309.0], [161.0, 299.25], [164.0, 298.5], [160.0, 323.0], [165.0, 320.6666666666667], [173.0, 253.57142857142858], [171.0, 128.6], [170.0, 81.5], [169.0, 64.8], [168.0, 266.125], [172.0, 298.5], [174.0, 311.0], [181.0, 196.66666666666666], [180.0, 151.25], [177.0, 53.0], [176.0, 6.0], [178.0, 306.0], [179.0, 305.0], [191.0, 1.0], [190.0, 0.33333333333333337], [189.0, 74.8], [184.0, 93.8], [185.0, 194.0], [186.0, 191.0], [188.0, 188.0], [187.0, 148.66666666666666], [198.0, 99.39999999999999], [193.0, 161.6], [192.0, 66.25], [195.0, 219.25], [196.0, 245.16666666666669], [197.0, 238.8125], [199.0, 188.875], [207.0, 1.5], [206.0, 116.8888888888889], [204.0, 140.25000000000003], [203.0, 118.66666666666667], [201.0, 86.75], [200.0, 172.02564102564105], [205.0, 73.33333333333333], [214.0, 66.83333333333333], [211.0, 1.0], [210.0, 144.15384615384613], [209.0, 100.66666666666667], [215.0, 291.0], [213.0, 184.5], [208.0, 175.5], [223.0, 1.5555555555555556], [220.0, 1.0], [218.0, 125.0], [216.0, 269.5], [237.0, 26.0], [302.0, 209.0], [294.0, 173.0], [293.0, 175.0], [292.0, 173.0], [317.0, 188.0], [324.0, 160.0], [320.0, 162.0], [351.0, 336.5], [348.0, 330.5], [347.0, 311.0], [341.0, 159.0], [366.0, 303.5], [363.0, 307.0], [360.0, 153.0], [357.0, 332.0], [356.0, 291.5], [355.0, 341.0], [354.0, 278.0], [352.0, 309.0], [383.0, 310.5], [381.0, 279.0], [379.0, 314.35135135135135], [380.0, 310.0], [378.0, 288.0], [376.0, 271.0], [375.0, 336.5], [373.0, 301.75], [368.0, 297.6666666666667], [387.0, 312.84397163120565], [388.0, 318.0], [386.0, 311.0], [385.0, 311.0], [473.0, 2.0], [478.0, 1.0], [477.0, 1.0], [494.0, 1.0], [507.0, 1.0], [515.0, 7.666666666666667], [520.0, 3.5], [523.0, 133.0], [534.0, 125.0], [536.0, 163.5], [539.0, 139.0], [540.0, 103.0], [541.0, 100.5], [543.0, 169.0], [546.0, 161.0], [556.0, 166.0], [544.0, 147.25], [559.0, 130.0], [557.0, 138.9], [558.0, 127.0], [547.0, 142.0625], [549.0, 141.14285714285717], [550.0, 165.66666666666666], [568.0, 151.1578947368421], [560.0, 167.33333333333334], [561.0, 116.21428571428572], [563.0, 130.16666666666666], [564.0, 116.66666666666667], [565.0, 147.99999999999997], [566.0, 99.75], [567.0, 110.0], [552.0, 123.87500000000001], [553.0, 138.0], [555.0, 162.7], [1.0, 1.075471698113208]], "isOverall": false, "label": "HTTP请求", "isController": false}, {"data": [[160.8875000000002, 100.05849999999992]], "isOverall": false, "label": "HTTP请求-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 568.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 3575.0, "minX": 1.68421134E12, "maxY": 17545.4, "series": [{"data": [[1.68421134E12, 17545.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68421134E12, 3575.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68421134E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 100.05849999999992, "minX": 1.68421134E12, "maxY": 100.05849999999992, "series": [{"data": [[1.68421134E12, 100.05849999999992]], "isOverall": false, "label": "HTTP请求", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68421134E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 85.59850000000004, "minX": 1.68421134E12, "maxY": 85.59850000000004, "series": [{"data": [[1.68421134E12, 85.59850000000004]], "isOverall": false, "label": "HTTP请求", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68421134E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 29.28899999999994, "minX": 1.68421134E12, "maxY": 29.28899999999994, "series": [{"data": [[1.68421134E12, 29.28899999999994]], "isOverall": false, "label": "HTTP请求", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68421134E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.68421134E12, "maxY": 363.0, "series": [{"data": [[1.68421134E12, 363.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68421134E12, 0.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68421134E12, 320.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68421134E12, 341.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68421134E12, 40.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.68421134E12, 340.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68421134E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 3.0, "minX": 789.0, "maxY": 160.0, "series": [{"data": [[1211.0, 160.0], [789.0, 3.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1211.0, 112.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1211.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 789.0, "maxY": 160.0, "series": [{"data": [[1211.0, 160.0], [789.0, 3.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1211.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1211.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 33.333333333333336, "minX": 1.68421134E12, "maxY": 33.333333333333336, "series": [{"data": [[1.68421134E12, 33.333333333333336]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68421134E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 4.733333333333333, "minX": 1.68421134E12, "maxY": 28.6, "series": [{"data": [[1.68421134E12, 28.6]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.68421134E12, 4.733333333333333]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68421134E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 4.733333333333333, "minX": 1.68421134E12, "maxY": 28.6, "series": [{"data": [[1.68421134E12, 4.733333333333333]], "isOverall": false, "label": "HTTP请求-failure", "isController": false}, {"data": [[1.68421134E12, 28.6]], "isOverall": false, "label": "HTTP请求-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68421134E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 4.733333333333333, "minX": 1.68421134E12, "maxY": 28.6, "series": [{"data": [[1.68421134E12, 28.6]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.68421134E12, 4.733333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68421134E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

