/**
 * Created with JetBrains PhpStorm.
 * User: taoqili
 * Date: 12-6-12
 * Time: 下午5:02
 * To change this template use File | Settings | File Templates.
 */
UE.I18N['zh-cn'] = {
    'labelMap':{
        'anchor':'錨點', 'undo':'復原', 'redo':'重複', 'bold':'粗體', 'indent':'首行縮排', 'snapscreen':'截圖',
        'italic':'斜體', 'underline':'底線', 'strikethrough':'刪除線', 'subscript':'下標','fontborder':'字元框線',
        'superscript':'上標', 'formatmatch':'複製格式', 'source':'編輯html', 'blockquote':'引用',
        'pasteplain':'貼上純文字', 'selectall':'全選', 'print':'列印', 'preview':'預覽',
        'horizontal':'分隔線', 'removeformat':'清除格式', 'time':'時間', 'date':'日期',
        'unlink':'移除超連結', 'insertrow':'插入上方列', 'insertcol':'插入左方欄', 'mergeright':'往右合併儲存格', 'mergedown':'往下合併儲存格',
        'deleterow':'删除列', 'deletecol':'删除欄', 'splittorows':'拆分成列',
        'splittocols':'拆分成欄', 'splittocells':'完全拆分儲存格','deletecaption':'删除表格標題','inserttitle':'插入標題',
        'mergecells':'合併儲存格', 'deletetable':'删除表格', 'cleardoc':'清除','insertparagraphbeforetable':"表格前插入段落",'insertcode':'代碼語言',
        'fontfamily':'字型', 'fontsize':'字型大小', 'paragraph':'段落格式', 'simpleupload':'上傳單圖', 'insertimage':'上傳多圖','edittable':'表格屬性','edittd':'儲存格屬性', 'link':'超連結',
        'emotion':'表情符號', 'spechars':'特殊符號', 'searchreplace':'取代', 'map':'百度地圖', 'gmap':'Google地圖',
        'insertvideo':'影片', 'help':'幫助', 'justifyleft':'靠左對齊', 'justifyright':'靠右對齊', 'justifycenter':'置中',
        'justifyjustify':'左右對齊', 'forecolor':'字型色彩', 'backcolor':'背景色', 'insertorderedlist':'編號',
        'insertunorderedlist':'項目符號', 'fullscreen':'全螢幕', 'directionalityltr':'從左而右輸入', 'directionalityrtl':'從右而左輸入',
        'rowspacingtop':'與前段距離', 'rowspacingbottom':'與後段距離',  'pagebreak':'分頁', 'insertframe':'插入Iframe', 'imagenone':'預設',
        'imageleft':'左浮動', 'imageright':'右浮動', 'attachment':'附件', 'imagecenter':'置中', 'wordimage':'圖片轉存',
        'lineheight':'行距','edittip' :'編輯提示','customstyle':'自定義標題', 'autotypeset':'自動排版',
        'webapp':'百度應用','touppercase':'字母大寫', 'tolowercase':'字母小寫','background':'背景','template':'模板','scrawl':'塗鴉',
        'music':'音樂','inserttable':'插入表格','drafts': '從草稿箱載入', 'charts': '圖表'
    },
    'insertorderedlist':{
        'num':'1,2,3...',
        'num1':'1),2),3)...',
        'num2':'(1),(2),(3)...',
        'cn':'一,二,三....',
        'cn1':'一),二),三)....',
        'cn2':'(一),(二),(三)....',
        'decimal':'1,2,3...',
        'lower-alpha':'a,b,c...',
        'lower-roman':'i,ii,iii...',
        'upper-alpha':'A,B,C...',
        'upper-roman':'I,II,III...'
    },
    'insertunorderedlist':{
        'circle':'○ 大圓圈',
        'disc':'● 小黑點',
        'square':'■ 小方塊 ',
        'dash' :'— 破折號',
        'dot':' 。 小圓圈'
    },
    'paragraph':{'p':'段落', 'h1':'標題 1', 'h2':'標題 2', 'h3':'標題 3', 'h4':'標題 4', 'h5':'標題 5', 'h6':'標題 6'},
    'fontfamily':{
        'songti':'宋體',
        'kaiti':'楷體',
        'heiti':'黑體',
        'lishu':'隸書',
        'yahei':'微軟雅黑',
        'andaleMono':'andale mono',
        'arial': 'arial',
        'arialBlack':'arial black',
        'comicSansMs':'comic sans ms',
        'impact':'impact',
        'timesNewRoman':'times new roman'
    },
    'customstyle':{
        'tc':'標題置中',
        'tl':'標題居左',
        'im':'強調',
        'hi':'明顯強調'
    },
    'autoupload': {
        'exceedSizeError': '文件大小超出限制',
        'exceedTypeError': '文件格式不允許',
        'jsonEncodeError': '伺服器傳回格式錯誤',
        'loading':"正在上傳...",
        'loadError':"上傳錯誤",
        'errorLoadConfig': '後端配置項没有正常載入，上傳插件不能正常使用！'
    },
    'simpleupload':{
        'exceedSizeError': '檔案大小超出限制',
        'exceedTypeError': '檔案格式不允許',
        'jsonEncodeError': '伺服器傳回格式錯誤',
        'loading':"正在上傳...",
        'loadError':"上傳錯誤",
        'errorLoadConfig': '後端配置項没有正常載入，上傳插件不能正常使用！'
    },
    'elementPathTip':"元素路徑",
    'wordCountTip':"字數統計",
    'wordCountMsg':'目前已輸入{#count}個字元, 您還可以輸入{#leave}個字元。 ',
    'wordOverFlowMsg':'<span style="color:red;">字數超出最大允許值！</span>',
    'ok':"確認",
    'cancel':"取消",
    'closeDialog':"關閉對話框",
    'tableDrag':"表格拖動必須引入uiUtils.js文件！",
    'autofloatMsg':"工具欄浮動依賴編輯器UI，您首先需要引入UI文件!",
    'loadconfigError': '獲取後台配置項請求出錯，上傳功能將不能正常使用！',
    'loadconfigFormatError': '後台配置項返回格式出錯，上傳功能將不能正常使用！',
    'loadconfigHttpError': '請求後台配置項http錯誤，上傳功能將不能正常使用！',
    'snapScreen_plugin':{
        'browserMsg':"僅支援IE瀏覽器！",
        'callBackErrorMsg':"伺服器返回資料有誤，請檢查配置項之後重試。",
        'uploadErrorMsg':"截圖上傳失敗，請檢查伺服器端環境! "
    },
    'insertcode':{
        'as3':'ActionScript 3',
        'bash':'Bash/Shell',
        'cpp':'C/C++',
        'css':'CSS',
        'cf':'ColdFusion',
        'c#':'C#',
        'delphi':'Delphi',
        'diff':'Diff',
        'erlang':'Erlang',
        'groovy':'Groovy',
        'html':'HTML',
        'java':'Java',
        'jfx':'JavaFX',
        'js':'JavaScript',
        'pl':'Perl',
        'php':'PHP',
        'plain':'Plain Text',
        'ps':'PowerShell',
        'python':'Python',
        'ruby':'Ruby',
        'scala':'Scala',
        'sql':'SQL',
        'vb':'Visual Basic',
        'xml':'XML'
    },
    'confirmClear':"確定清除？",
    'contextMenu':{
    	 'delete':"删除",
         'selectall':"全選",
         'deletecode':"删除代碼",
         'cleardoc':"清除內容",
         'confirmclear':"確定清除目前內容嗎？",
         'unlink':"删除超連結",
         'paragraph':"段落格式",
         'edittable':"表格屬性",
         'aligntd':"儲存格對齊方式",
         'aligntable':'表格對齊方式',
         'tableleft':'左浮動',
         'tablecenter':'置中顯示',
         'tableright':'右浮動',
         'edittd':"儲存格屬性",
         'setbordervisible':'設定表格邊線可見',
         'justifyleft':'靠左對齊',
         'justifyright':'靠右對齊',
         'justifycenter':'置中對齊',
         'justifyjustify':'左右對齊',
         'table':"表格",
         'inserttable':'插入表格',
         'deletetable':"删除表格",
         'insertparagraphbefore':"前插入段落",
         'insertparagraphafter':'後插入段落',
         'deleterow':"删除當前列",
         'deletecol':"删除當前欄",
         'insertrow':"前插入列",
         'insertcol':"左插入欄",
         'insertrownext':'後插入列',
         'insertcolnext':'右插入欄',
         'insertcaption':'插入表格名稱',
         'deletecaption':'删除表格名稱',
         'inserttitle':'插入表格標題',
         'deletetitle':'删除表格標題',
         'inserttitlecol':'插入表格標題欄',
         'deletetitlecol':'删除表格標題欄',
         'averageDiseRow':'平均分布各欄',
         'averageDisCol':'平均分布各列',
         'mergeright':"向右合併",
         'mergeleft':"向左合併",
         'mergedown':"向下合併",
         'mergecells':"合併儲存格",
         'splittocells':"完全拆分儲存格",
         'splittocols':"拆分成列",
         'splittorows':"拆分成行",
         'tablesort':'表格排序',
         'enablesort':'設定表格可排序',
         'disablesort':'取消表格可排序',
         'reversecurrent':'與目前相反排序',
         'orderbyasc':'按ASCII字元升序',
         'reversebyasc':'按ASCII字元降序',
         'orderbynum':'按數值大小升序',
         'reversebynum':'按數值大小降序',
         'borderbk':'邊框底纹',
         'setcolor':'表格隔行變色',
         'unsetcolor':'取消表格隔行變色',
         'setbackground':'選區背景隔行',
         'unsetbackground':'取消選區背景',
         'redandblue':'紅藍相間',
         'threecolorgradient':'三色漸變',
         'copy':"複製(Ctrl + c)",
         'copymsg': "瀏覽器不支援,請使用 'Ctrl + c'",
         'paste':"貼上(Ctrl + v)",
          'pastemsg': "瀏覽器不支援,請使用 'Ctrl + v'"
    },
    'copymsg': "瀏覽器不支援,請使用 'Ctrl + c'",
    'pastemsg': "瀏覽器不支援,請使用 'Ctrl + v'",
    'anthorMsg':"連結",
    'clearColor':'清除顏色',
    'standardColor':'標準顏色',
    'themeColor':'主題顏色',
    'property':'屬性',
    'default':'預設',
    'modify':'修改',
    'justifyleft':'左對齊',
    'justifyright':'右對齊',
    'justifycenter':'置中',
    'justify':'預設',
    'clear':'清除',
    'anchorMsg':'錨點',
    'delete':'删除',
    'clickToUpload':"點擊上傳",
    'unset':'尚未設定語言文件',
    't_row':'列',
    't_col':'欄',
    'more':'更多',
    'pasteOpt':'貼上選項',
    'pasteSourceFormat':"保留源格式",
    'tagFormat':'只保留標籤',
    'pasteTextFormat':'只保留文字',
    'autoTypeSet':{
        'mergeLine':"合併空行",
        'delLine':"清除空行",
        'removeFormat':"清除格式",
        'indent':"首行縮排",
        'alignment':"對齊方式",
        'imageFloat':"圖片浮動",
        'removeFontsize':"清除字型大小",
        'removeFontFamily':"清除字體",
        'removeHtml':"清除多餘HTML碼",
        'pasteFilter':"貼上過濾",
        'run':"執行",
        'symbol':'符號轉換',
        'bdc2sb':'全形轉半形',
        'tobdc':'半形轉全形'
    },

    'background':{
        'static':{
            'lang_background_normal':'背景設定',
            'lang_background_local':'線上圖片',
            'lang_background_set':'選項',
            'lang_background_none':'無背景色',
            'lang_background_colored':'有背景色',
            'lang_background_color':'顏色設定',
            'lang_background_netimg':'網路圖片',
            'lang_background_align':'對齊方式',
            'lang_background_position':'精確定位',
            'repeatType':{'options':["置中", "横向重複", "縱向重複", "平鋪","自定義"]}

        },
        'noUploadImage':"當前未上傳過任何圖片！",
        'toggleSelect':"單擊可切換選中狀態\n原圖尺寸: "
    },
    //===============dialog i18N=======================
    'insertimage':{
        'static':{
            'lang_tab_remote':"插入圖片", //節點
            'lang_tab_upload':"本機上傳",
            'lang_tab_online':"線上管理",
            'lang_tab_search':"圖片搜尋",
            'lang_input_url':"地址：",
            'lang_input_size':"大小：",
            'lang_input_width':"寬度",
            'lang_input_height':"高度",
            'lang_input_border':"邊框：",
            'lang_input_vhspace':"邊距：",
            'lang_input_title':"描述：",
            'lang_input_align':'圖片浮動方式：',
            'lang_imgLoading':"　圖片載入中……",
            'lang_start_upload':"開始上傳",
            'lock':{'title':"鎖定寬高比例"}, //屬性
            'searchType':{'title':"圖片類型", 'options':["新聞", "背景圖片", "表情", "個人圖片"]}, //select的option
            'searchTxt':{'value':"請輸入搜尋關鍵字"},
            'searchBtn':{'value':"查詢百度"},
            'searchReset':{'value':"清除搜尋"},
            'noneAlign':{'title':'無浮動'},
            'leftAlign':{'title':'左浮動'},
            'rightAlign':{'title':'右浮動'},
            'centerAlign':{'title':'置中獨占一行'}
        },
        'uploadSelectFile':'點擊選擇圖片',
        'uploadAddFile':'繼續添加',
        'uploadStart':'開始上傳',
        'uploadPause':'暫停上傳',
        'uploadContinue':'繼續上傳',
        'uploadRetry':'重試上傳',
        'uploadDelete':'删除',
        'uploadTurnLeft':'向左旋轉',
        'uploadTurnRight':'向右旋轉',
        'uploadPreview':'預覽中',
        'uploadNoPreview':'不能預覽',
        'updateStatusReady': '選中_張圖片，共_KB。',
        'updateStatusConfirm': '已成功上傳_張照片，_張照片上傳失敗',
        'updateStatusFinish': '共_張（_KB），_張上傳成功',
        'updateStatusError': '，_張上傳失敗。',
        'errorNotSupport': 'WebUploader 不支援您的瀏覽器！如果你使用的是IE瀏覽器，請嘗試升級 flash 播放器。',
        'errorLoadConfig': '後端配置項没有正常載入，上傳插件不能正常使用！',
        'errorExceedSize':'文件大小超出',
        'errorFileType':'文件格式不允許',
        'errorInterrupt':'文件傳輸中斷',
        'errorUploadRetry':'上傳失敗，請重試',
        'errorHttp':'http請求錯誤',
        'errorServerUpload':'伺服器返回出錯',
        'remoteLockError':"寬高不正確,不能所定比例",
        'numError':"請輸入正確的長度或者寬度值！例如：123，400",
        'imageUrlError':"不允許的圖片格式或者圖片欄位！",
        'imageLoadError':"圖片載入失敗！請檢查連結地址或網路狀態！",
        'searchRemind':"請輸入搜尋關鍵字",
        'searchLoading':"圖片載入中，請稍後……",
        'searchRetry':" :( ，抱歉，没有找到圖片！請重試一次！"
    },
    'attachment':{
        'static':{
            'lang_tab_upload': '上傳附件',
            'lang_tab_online': '線上附件',
            'lang_start_upload':"開始上傳",
            'lang_drop_remind':"可以將文件拖曳到這裡，單次最多可選100個文件"
        },
        'uploadSelectFile':'點擊選擇文件',
        'uploadAddFile':'繼續添加',
        'uploadStart':'開始上傳',
        'uploadPause':'暫停上傳',
        'uploadContinue':'繼續上傳',
        'uploadRetry':'重試上傳',
        'uploadDelete':'删除',
        'uploadTurnLeft':'向左旋轉',
        'uploadTurnRight':'向右旋轉',
        'uploadPreview':'預覽中',
        'updateStatusReady': '選中_個文件，共_KB。',
        'updateStatusConfirm': '已成功上傳_個文件，_個文件上傳失敗',
        'updateStatusFinish': '共_個（_KB），_個上傳成功',
        'updateStatusError': '，_張上傳失敗。',
        'errorNotSupport': 'WebUploader 不支援您的瀏覽器！如果你使用的是IE瀏覽器，請嘗試升級 flash 播放器。',
        'errorLoadConfig': '後端配置項没有正常載入，上傳插件不能正常使用！',
        'errorExceedSize':'文件大小超出',
        'errorFileType':'文件格式不允許',
        'errorInterrupt':'文件傳輸中斷',
        'errorUploadRetry':'上傳失敗，請重試',
        'errorHttp':'http請求錯誤',
        'errorServerUpload':'伺服器返回出錯'
    },
    'insertvideo':{
        'static':{
            'lang_tab_insertV':"插入影片",
            'lang_tab_searchV':"搜尋影片",
            'lang_tab_uploadV':"上傳影片",
            'lang_video_url':"影片網址",
            'lang_video_size':"影片尺寸",
            'lang_videoW':"寬度",
            'lang_videoH':"高度",
            'lang_alignment':"對齊方式",
            'videoSearchTxt':{'value':"請輸入查詢關鍵字！"},
            'videoType':{'options':["全部", "熱門", "娛樂", "搞笑", "體育", "科技", "綜藝"]},
            'videoSearchBtn':{'value':"百度一下"},
            'videoSearchReset':{'value':"清除結果"},

            'lang_input_fileStatus':' 當前未上傳文件',
            'startUpload':{'style':"background:url(upload.png) no-repeat;"},

            'lang_upload_size':"影片尺寸",
            'lang_upload_width':"寬度",
            'lang_upload_height':"高度",
            'lang_upload_alignment':"對齊方式",
            'lang_format_advice':"建議使用mp4格式."

        },
        'numError':"請輸入正確的數值，如123,400",
        'floatLeft':"左浮動",
        'floatRight':"右浮動",
        '"default"':"預設",
        'block':"獨占一行",
        'urlError':"輸入的影片地址有誤，請檢查後再試！",
        'loading':" &nbsp;影片載入中，請等待……",
        'clickToSelect':"點擊選中",
        'goToSource':'原始影片',
        'noVideo':" &nbsp; &nbsp;抱歉，找不到對應的影片，請重試！",

        'browseFiles':'瀏覽文件',
        'uploadSuccess':'上傳成功!',
        'delSuccessFile':'從成功隊列中移除',
        'delFailSaveFile':'移除保存失敗文件',
        'statusPrompt':' 個文件已上傳！ ',
        'flashVersionError':'當前Flash版本過低，請更新FlashPlayer後重試！',
        'flashLoadingError':'Flash載入失敗!請檢查路徑或網路狀態',
        'fileUploadReady':'等待上傳……',
        'delUploadQueue':'從上傳序列中移除',
        'limitPrompt1':'單次不能選擇超過',
        'limitPrompt2':'個文件！請重新選擇！',
        'delFailFile':'移除失敗文件',
        'fileSizeLimit':'文件大小超出限制！',
        'emptyFile':'空文件無法上傳！',
        'fileTypeError':'文件類型不允許！',
        'unknownError':'未知錯誤！',
        'fileUploading':'上傳中，請等待……',
        'cancelUpload':'取消上傳',
        'netError':'網路錯誤',
        'failUpload':'上傳失敗!',
        'serverIOError':'伺服器存取錯誤！',
        'noAuthority':'無權限！',
        'fileNumLimit':'上傳個數限制',
        'failCheck':'驗證失敗，本次上傳被跳過！',
        'fileCanceling':'取消中，請等待……',
        'stopUploading':'上傳已停止……',

        'uploadSelectFile':'點擊選擇文件',
        'uploadAddFile':'繼續添加',
        'uploadStart':'開始上傳',
        'uploadPause':'暫停上傳',
        'uploadContinue':'繼續上傳',
        'uploadRetry':'重試上傳',
        'uploadDelete':'删除',
        'uploadTurnLeft':'向左旋轉',
        'uploadTurnRight':'向右旋轉',
        'uploadPreview':'預覽中',
        'updateStatusReady': '選中_個文件，共_KB。',
        'updateStatusConfirm': '成功上傳_個，_個失敗',
        'updateStatusFinish': '共_個(_KB)，_個成功上傳',
        'updateStatusError': '，_張上傳失敗。',
        'errorNotSupport': 'WebUploader 不支援您的瀏覽器！如果你使用的是IE瀏覽器，請嘗試升級 flash 播放器。',
        'errorLoadConfig': '後端配置項没有正常載入，上傳插件不能正常使用！',
        'errorExceedSize':'文件大小超出',
        'errorFileType':'文件格式不允許',
        'errorInterrupt':'文件傳輸中斷',
        'errorUploadRetry':'上傳失敗，請重試',
        'errorHttp':'http請求錯誤',
        'errorServerUpload':'伺服器返回出錯'
    },
    'webapp':{
        'tip1':"本功能由百度APP提供，如看到此頁面，請各位站長首先申請百度APPKey!",
        'tip2':"申請完成之後請至ueditor.config.js中配置獲得的appkey! ",
        'applyFor':"點此申請",
        'anthorApi':"百度API"
    },
    'template':{
        'static':{
            'lang_template_bkcolor':'背景顏色',
            'lang_template_clear' : '保留原有内容',
            'lang_template_select' : '選擇模板'
        },
        'blank':"空白內容",
        'blog':"部落格文章",
        'resume':"個人簡歷",
        'richText':"圖文混排",
        'sciPapers':"科技論文"


    },
    'scrawl':{
        'static':{
            'lang_input_previousStep':"上一步",
            'lang_input_nextsStep':"下一步",
            'lang_input_clear':'清除',
            'lang_input_addPic':'添加背景',
            'lang_input_ScalePic':'縮放背景',
            'lang_input_removePic':'删除背景',
            'J_imgTxt':{title:'添加背景圖片'}
        },
        'noScarwl':"尚未作畫",
        'scrawlUpLoading':"塗鴉上傳中,請稍後",
        'continueBtn':"繼續",
        'imageError':"糟糕，圖片讀取失敗了！",
        'backgroundUploading':'背景圖片上傳中,請稍後'
    },
    'music':{
        'static':{
            'lang_input_tips':"輸入歌手/歌曲/專輯，搜尋您感興趣的音樂！",
            'J_searchBtn':{value:'搜尋歌曲'}
        },
        'emptyTxt':'未搜尋到相關音樂結果，請換一個關鍵字試試。',
        'chapter':'歌曲',
        'singer':'歌手',
        'special':'專輯',
        'listenTest':'試聽'
    },
    'anchor':{
        'static':{
            'lang_input_anchorName':'錨點名稱：'
        }
    },
    'charts':{
        'static':{
            'lang_data_source':'資料來源：',
            'lang_chart_format': '圖表格式：',
            'lang_data_align': '資料對齊方式',
            'lang_chart_align_same': '資料來源與圖表X軸Y軸一致',
            'lang_chart_align_reverse': '資料來源與圖表X軸Y軸相反',
            'lang_chart_title': '圖表標題',
            'lang_chart_main_title': '主標題：',
            'lang_chart_sub_title': '子標題：',
            'lang_chart_x_title': 'X軸標題：',
            'lang_chart_y_title': 'Y軸標題：',
            'lang_chart_tip': '提示文字',
            'lang_cahrt_tip_prefix': '提示文字前綴：',
            'lang_cahrt_tip_description': '僅圓餅圖有效，當滑鼠移動到圓餅圖中相應的區塊時，提示框内的文字的前綴',
            'lang_chart_data_unit': '資料單位',
            'lang_chart_data_unit_title': '單位：',
            'lang_chart_data_unit_description': '顯示在每個資料點上的資料的單位， 比如： 溫度的單位 ℃',
            'lang_chart_type': '圖表類型：',
            'lang_prev_btn': '上一個',
            'lang_next_btn': '下一個'
        }
    },
    'emotion':{
        'static':{
            'lang_input_choice':'精選',
            'lang_input_Tuzki':'兔斯基',
            'lang_input_BOBO':'BOBO',
            'lang_input_lvdouwa':'綠豆蛙',
            'lang_input_babyCat':'baby猫',
            'lang_input_bubble':'泡泡',
            'lang_input_youa':'有啊'
        }
    },
    'gmap':{
        'static':{
            'lang_input_address':'地址',
            'lang_input_search':'查詢',
            'address':{value:"台北"}
        },
        searchError:'無法定位到該地址!'
    },
    'help':{
        'static':{
            'lang_input_about':'關于UEditor',
            'lang_input_shortcuts':'快捷鍵',
            'lang_input_introduction':'UEditor是由百度web前端研發部開發的所見即所得豐富文本web編輯器，具有輕量，可客製，注重用户體驗等特點。開源基于BSD協議，允許自由使用和修改代碼。',
            'lang_Txt_shortcuts':'快捷鍵',
            'lang_Txt_func':'功能',
            'lang_Txt_bold':'選取文字設定為粗體',
            'lang_Txt_copy':'複製選取内容',
            'lang_Txt_cut':'剪下選取内容',
            'lang_Txt_Paste':'貼上',
            'lang_Txt_undo':'重新執行上次操作',
            'lang_Txt_redo':'取消上一次操作',
            'lang_Txt_italic':'選取文字設定為斜體',
            'lang_Txt_underline':'選取文字加底線',
            'lang_Txt_selectAll':'全部選取',
            'lang_Txt_visualEnter':'自動換行',
            'lang_Txt_fullscreen':'全螢幕'
        }
    },
    'insertframe':{
        'static':{
            'lang_input_address':'地址：',
            'lang_input_width':'寬度：',
            'lang_input_height':'高度：',
            'lang_input_isScroll':'允許捲軸：',
            'lang_input_frameborder':'顯示邊框：',
            'lang_input_alignMode':'對齊方式：',
            'align':{title:"對齊方式", options:["預設", "靠左對齊", "靠右對齊", "置中"]}
        },
        'enterAddress':'請輸入地址!'
    },
    'link':{
        'static':{
            'lang_input_text':'内容：',
            'lang_input_url':'連結地址：',
            'lang_input_title':'標題：',
            'lang_input_target':'是否在新窗口打開：'
        },
        'validLink':'只支援選中一個連結時生效',
        'httpPrompt':'您輸入的超連結中不包含http等協議名稱，預設將為您添加http://前綴'
    },
    'map':{
        'static':{
            lang_city:"城市",
            lang_address:"地址",
            city:{value:"北京"},
            lang_search:"搜尋",
            lang_dynamicmap:"插入動態地圖"
        },
        cityMsg:"請選擇城市",
        errorMsg:"抱歉，找不到該位置！"
    },
    'searchreplace':{
        'static':{
            lang_tab_search:"查找",
            lang_tab_replace:"替換",
            lang_search1:"查找",
            lang_search2:"查找",
            lang_replace:"替換",
            lang_searchReg:'支援正規表示法，添加前後斜線標示為正規表示法，例如“/表示法/”',
            lang_searchReg1:'支援正規表示法，添加前後斜線標示為正規表示法，例如“/表示法/”',
            lang_case_sensitive1:"區分大小寫",
            lang_case_sensitive2:"區分大小寫",
            nextFindBtn:{value:"下一個"},
            preFindBtn:{value:"上一個"},
            nextReplaceBtn:{value:"下一個"},
            preReplaceBtn:{value:"上一個"},
            repalceBtn:{value:"替換"},
            repalceAllBtn:{value:"全部替換"}
        },
        getEnd:"已經搜尋到文章末尾！",
        getStart:"已經搜尋到文章起始",
        countMsg:"總共替換了{#count}處！"
    },
    'snapscreen':{
        'static':{
            lang_showMsg:"截圖功能需要首先安裝UEditor截圖插件！ ",
            lang_download:"點此下載",
            lang_step1:"第一步，下載UEditor截圖插件並安裝。",
            lang_step2:"第二步，插件安裝完成後即可使用，如不生效，請重啟瀏覽器後再試！"
        }
    },
    'spechars':{
        'static':{},
        tsfh:"特殊字元",
        lmsz:"羅馬字元",
        szfh:"數學字元",
        rwfh:"日文字元",
        xlzm:"希臘字母",
        ewzm:"俄文字元",
        pyzm:"拼音字母",
        yyyb:"英語音標",
        zyzf:"其他"
    },
    'edittable':{
        'static':{
            'lang_tableStyle':'表格樣式',
            'lang_insertCaption':'添加表格名稱行',
            'lang_insertTitle':'添加表格標題行',
            'lang_insertTitleCol':'添加表格標題列',
            'lang_orderbycontent':"使表格内容可排序",
            'lang_tableSize':'自動調整表格尺寸',
            'lang_autoSizeContent':'按表格文字自動調整',
            'lang_autoSizePage':'按頁面寬度自動調整',
            'lang_example':'示例',
            'lang_borderStyle':'表格邊框',
            'lang_color':'顏色:'
        },
        captionName:'表格名稱',
        titleName:'標題',
        cellsName:'内容',
        errorMsg:'有合併儲存格，不可排序'
    },
    'edittip':{
        'static':{
            lang_delRow:'删除整行',
            lang_delCol:'删除整列'
        }
    },
    'edittd':{
        'static':{
            lang_tdBkColor:'背景顏色:'
        }
    },
    'formula':{
        'static':{
        }
    },
    'wordimage':{
        'static':{
            lang_resave:"轉存步驟",
            uploadBtn:{src:"upload.png",alt:"上傳"},
            clipboard:{style:"background: url(copy.png) -153px -1px no-repeat;"},
            lang_step:"1、點擊頂部複製按鈕，將地址複製到剪貼簿；2、點擊添加照片按鈕，在彈出的對話框中使用Ctrl+V貼上地址；3、點擊打開後選擇圖片上傳流程。"
        },
        'fileType':"圖片",
        'flashError':"FLASH初始化失敗，請檢查FLASH插件是否正確安裝！",
        'netError':"網路連接錯誤，請重試！",
        'copySuccess':"圖片地址已經複製！",
        'flashI18n':{} //留空預設中文
    },
    'autosave': {
        'saving':'儲存中...',
        'success':'儲存成功'
    }
};
