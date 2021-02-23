(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{328:function(e,t,i){},371:function(e,t,i){"use strict";i(328)},377:function(e,t,i){"use strict";i.r(t);var n=i(370),o={components:{FlowForm:i.n(n).a},data:function(){return{interactiveQuestions:[new n.QuestionModel({id:"start",tagline:"興味を持っていただきありがとうございます!",title:"グループへの参加方法をご案内します!",type:n.QuestionType.SectionBreak,required:!0,description:"参加方法でわからないところがあれば、モデレーターのページに記載されているモデレーターのTwitterDMまでご連絡ください！"}),new n.QuestionModel({id:"checkServerRule",title:"まずはサーバーのルールを確認しましょう",type:n.QuestionType.MultipleChoice,helpText:"本キャンパスではトラブルの発生などを防ぐため、最低限のルールを設定しています。ルールを守らない場合、グループから退出していただく場合があります。",required:!0,descriptionLink:[new n.LinkOption({url:"/rule",text:"ルールはこちらから確認してください"})],options:[new n.ChoiceOption({label:"ルールを確認しました",value:"next"})]}),new n.QuestionModel({id:"isRegisteredDiscord",title:"チャットツール「Discord」のアカウントを持っていますか？",type:n.QuestionType.MultipleChoice,multiple:!1,required:!0,helpTextShow:!1,options:[new n.ChoiceOption({label:"持っている",value:"yes"}),new n.ChoiceOption({label:"持っていない",value:"no"})],jump:{yes:"checkAlreadyMailAuth",no:"whichDeviceUsing"}}),new n.QuestionModel({id:"whichDeviceUsing",title:"お使いの端末を選んでください。",type:n.QuestionType.MultipleChoice,multiple:!1,required:!0,helpTextShow:!1,options:[new n.ChoiceOption({label:"Android",value:"android"}),new n.ChoiceOption({label:"iPhone/iPad",value:"ios"}),new n.ChoiceOption({label:"Windows/Mac/Linux",value:"pc"})],jump:{android:"installDiscordOnAndroid",ios:"installDiscordOnIos",pc:"installDiscordOnPC"}}),new n.QuestionModel({id:"installDiscordOnAndroid",title:"Discordのアプリをインストールしてください",type:n.QuestionType.MultipleChoice,helpText:"下の「こちらから」をクリックしてDiscordのアプリをインストールし、完了したら「インストールしました」を選んで次に進んでください。",required:!0,descriptionLink:[new n.LinkOption({url:"https://play.google.com/store/apps/details?id=com.discord",text:"インストールはこちらから"})],options:[new n.ChoiceOption({label:"インストールしました",value:"next"})],jump:{next:"registerDiscord"}}),new n.QuestionModel({id:"installDiscordOnIos",title:"Discordのアプリをインストールしてください",type:n.QuestionType.MultipleChoice,helpText:"下の「こちらから」をクリックしてDiscordのアプリをインストールし、完了したら「インストールしました」を選んで次に進んでください。",required:!0,descriptionLink:[new n.LinkOption({url:"https://apps.apple.com/jp/app/discord-%E8%A9%B1%E3%81%9D%E3%81%86-%E3%83%81%E3%83%A3%E3%83%83%E3%83%88%E3%81%97%E3%82%88%E3%81%86-%E9%9B%86%E3%81%BE%E3%82%8D%E3%81%86/id985746746",text:"インストールはこちらから"})],options:[new n.ChoiceOption({label:"インストールしました",value:"next"})],jump:{next:"registerDiscord"}}),new n.QuestionModel({id:"installDiscordOnPc",title:"Discordのアプリをインストールしてください",type:n.QuestionType.MultipleChoice,helpText:"下の「こちらから」をクリックしてDiscordのアプリをインストールし、完了したら「インストールしました」を選んで次に進んでください。",required:!0,descriptionLink:[new n.LinkOption({url:"https://discord.com/download",text:"インストールはこちらから"})],options:[new n.ChoiceOption({label:"インストールしました",value:"next"})],jump:{next:"registerDiscord"}}),new n.QuestionModel({id:"registerDiscord",title:"次にDiscordのアカウントを作成します",type:n.QuestionType.MultipleChoice,helpText:"先ほどインストールしたアプリを起動し、「登録」もしくは「アカウント登録」を押してアカウントを作成してください。",required:!0,options:[new n.ChoiceOption({label:"アカウントを作成しました",value:"next"})]}),new n.QuestionModel({id:"checkMailAuth",title:"メールアドレスの認証を完了しましょう",type:n.QuestionType.MultipleChoice,helpText:"先ほど入力したメールアドレス宛に「メールアドレスを確認してください」というメールが届いていますので、「メールアドレスを認証する」をクリックして認証を完了させてください。",required:!0,options:[new n.ChoiceOption({label:"完了しました",value:"next"})],jump:{next:"_submit"}}),new n.QuestionModel({id:"checkAlreadyMailAuth",title:"メールアドレスの認証は完了していますか？",type:n.QuestionType.MultipleChoice,helpText:"当サーバーでは荒らし等のユーザーを防止する目的でメールアドレスの認証が完了しているユーザーのみ参加できるようにしています。アプリ上でオレンジ色のバナーが表示されている場合は完了していませんので、完了してから次のステップに進んで下さい。",required:!0,options:[new n.ChoiceOption({label:"完了しました",value:"next"})],jump:{next:"_submit"}})],interactiveGuideLanguage:new n.LanguageModel({continue:"次へ",pressEnter:"ボタンかエンターキーを押してください",ok:"決定"})}},methods:{joinGroup:function(){this.$refs.interactionQuestions.submitted=!0,this.$router.push("/discord")}}},s=(i(371),i(42)),l=Object(s.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"グループに参加する"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#グループに参加する"}},[e._v("#")]),e._v(" グループに参加する")]),e._v(" "),i("flow-form",{ref:"interactionQuestions",attrs:{questions:e.interactiveQuestions,language:e.interactiveGuideLanguage,standalone:!1,progressbar:!1},scopedSlots:e._u([{key:"complete",fn:function(){return[i("div",{staticClass:"f-section-wrap"},[i("p",[i("span",{staticClass:"fh2"},[e._v("それではグループに参加しましょう！")]),e._v(" "),i("span",{staticClass:"f-section-text"},[e._v("\n          下の「グループに参加する」を押し、出てくる画面の「参加する」を押せばグループへの参加は完了です！"),i("br"),e._v("\n          うまく参加できないときは、Discordアプリの左側のプラスボタン→「サーバーに参加する」に "),i("code",[e._v("NvrN6uaYxf")]),e._v(" を"),i("b",[e._v("コピー&ペーストして参加ボタンを押してください")]),e._v("。\n        ")])])])]},proxy:!0},{key:"completeButton",fn:function(){return[i("div",{staticClass:"f-submit"},[i("button",{ref:"button",staticClass:"o-btn-action",attrs:{type:"submit",href:"#","aria-label":"グループに参加する"},on:{click:function(t){return t.preventDefault(),e.joinGroup()}}},[i("span",[e._v("グループに参加する")])])])]},proxy:!0}])})],1)}),[],!1,null,null,null);t.default=l.exports}}]);