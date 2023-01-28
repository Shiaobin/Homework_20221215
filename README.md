# Homework_20221215

## Question
1. 實作題 (這題沒有數學解，直接模擬即可)

    請用 javascript 寫一隻小程式 Clockwise.js，輸入數字 n 輸出 nxn，依順時針由外到內填入所有數字。其中 n <= 10。

    範例一

    執行：`node Clockwise.js 5`

    輸出：(同一行兩個數字間以一個空白分隔)
    ```
    1 2 3 4 5
    16 17 18 19 6
    15 24 25 20 7
    14 23 22 21 8
    13 12 11 10 9
    ```

    範例二

    執行：`node Clockwise.js 4`

    輸出：
    ```
    1 2 3 4
    12 13 14 5
    11 16 15 6
    10 9 8 7
    ```

2. 實作題，請用 javascript 寫一隻小程式 parse.js，輸入 raw_data.json，輸出 clean_data.csv。檔名固定，總學生數數量 <= 10，每位學生資料齊全，每科必有成績。

    附檔 raw_data.json：
    ```json
    {"小明": {"id":"B05102332","transcript":[{"subject":"chinese","score":"98優異"},{"subject":"english","score":"85良好"}, {"subject":"math","score":"93優異"},{"subject":"social","score":"72尚可"},{"subject":"science","score":"40有待加強"}]},"ちびまる子ちゃん": {"id":"B08902245","transcript":[{"subject":"chinese","score":"88良好"},{"subject":"english","score":"95優異"}, {"subject":"math","score":"93優異"},{"subject":"social","score":"9差"},{"subject":"science","score":"70尚可"}]},"Bären": {"id":"B03902190","transcript":[{"subject":"chinese","score":"90優異"},{"subject":"english","score":"97優異"}, {"subject":"math","score":"100優異"},{"subject":"social","score":"91優異"},{"subject":"science","score":"96優異"}]}}
    ```
    附檔 clean_data.csv：(請依學號 id 由小到大排序，分數不用有雙引號)
    ```
    "id", "name", "chinese", "english", "math", "social", "science"
    "B03902190","Bären",90,97,100,91,96
    "B05102332","小明",98,85,93,72,40 
    "B08902245","ちびまる子ちゃん",88,95,93,9,70
    ```

3. 請完成一個後端與前端

    1. 後端 - WebAPI，請使用 node.js，框架不限，寫一個 WebAPI GET /course，以 json 格式回傳課程清單。課程清單如附檔 course_list.json，只有六門課

    2. 前端 - 網頁 UI，框架不限，請呼叫 (1) 的 API 得到課程清單後，在網頁左邊列出所有課程資訊，點選後會加入至右邊的預選區 (學生可選擇 1~6 門課)，預選區的每一門課在新加入時的志願序皆為當下最大的數字，可拖曳調整志願序。

        結束後按完成，會在底下列出文字清單。

        p.s. 因為沒有伺服器可以使用，所以只要純 code 就可以了

    UI 可參考：

    ![](https://i.imgur.com/c4gGq8B.jpg)
    ![](https://i.imgur.com/xw4AN54.jpg)

## Answer

1. 執行指令

    ```
    cd 1
    node Clockwise.js 5
    ```

    `5` 是方陣大小，可以改成其他數字。

2. 執行指令

    ```
    cd 2
    node parse.js
    ```

    結果會輸出在 `data/clean_data.csv`

3. 執行指令

    ```
    cd 3/backend
    node backend.js
    ```

    然後以網頁瀏覽器開啟 `3/fronted/fronted.htm`