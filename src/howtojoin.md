# グループに参加する

<flow-form 
  ref="interactionQuestions"
  v-bind:questions="interactiveQuestions"
  v-bind:language="interactiveGuideLanguage"
  v-bind:standalone="false"
  v-bind:progressbar="false"
>
  <template v-slot:complete>
    <div class="f-section-wrap">
      <p>
        <span class="fh2">それではグループに参加しましょう！</span>
        <span class="f-section-text">
          下の「グループに参加する」を押し、出てくる画面の「参加する」を押せばグループへの参加は完了です！<br>
          うまく参加できないときは、Discordアプリの左側のプラスボタン→「サーバーに参加する」に <code>NvrN6uaYxf</code> を<b>コピー&ペーストして参加ボタンを押してください</b>。
        </span>
      </p>
    </div>  
  </template>
  <template v-slot:completeButton>
    <div class="f-submit">
      <button 
        class="o-btn-action"
        ref="button"
        type="submit"
        href="#"
        v-on:click.prevent="joinGroup()"
        aria-label="グループに参加する"
      >
        <span>グループに参加する</span>
      </button>
    </div>
  </template>
</flow-form>

<script>
import FlowForm, { QuestionModel, QuestionType, ChoiceOption, LanguageModel, LinkOption } from '@ditdot-dev/vue-flow-form'
export default {
  components: {
    FlowForm
  },
  data() {
    return {
      interactiveQuestions: [
        new QuestionModel({
          id: 'start',
          tagline: '興味を持っていただきありがとうございます!',
          title: 'グループへの参加方法をご案内します!',
          type: QuestionType.SectionBreak,
          required: true,
          description: '参加方法でわからないところがあれば、モデレーターのページに記載されているモデレーターのTwitterDMまでご連絡ください！'
        }),
        new QuestionModel({
          id: 'checkServerRule',
          title: 'まずはサーバーのルールを確認しましょう',
          type: QuestionType.MultipleChoice,
          helpText: '本キャンパスではトラブルの発生などを防ぐため、最低限のルールを設定しています。ルールを守らない場合、グループから退出していただく場合があります。',
          required: true,
          descriptionLink: [
            new LinkOption({
              url: '/rule',
              text: 'ルールはこちらから確認してください'
            })
          ],
          options: [
            new ChoiceOption({
              label: 'ルールを確認しました',
              value: 'next'
            })
          ],
        }),
        new QuestionModel({
          id: 'isRegisteredDiscord',
          title: 'チャットツール「Discord」のアカウントを持っていますか？',
          type: QuestionType.MultipleChoice,
          multiple: false,
          required: true,
          helpTextShow: false,
          options: [
            new ChoiceOption({
              label: '持っている',
              value: 'yes'
            }),
            new ChoiceOption({
              label: '持っていない',
              value: 'no',
            })
          ],
          jump: {
            yes: 'checkAlreadyMailAuth',
            no: 'whichDeviceUsing'
          }
        }),
        new QuestionModel({
          id: 'whichDeviceUsing',
          title: 'お使いの端末を選んでください。',
          type: QuestionType.MultipleChoice,
          multiple: false,
          required: true,
          helpTextShow: false,
          options: [
            new ChoiceOption({
              label: 'Android',
              value: 'android'
            }),
            new ChoiceOption({
              label: 'iPhone/iPad',
              value: 'ios'
            }),
            new ChoiceOption({
              label: 'Windows/Mac/Linux',
              value: 'pc'
            }),
          ],
          jump: {
            android: 'installDiscordOnAndroid', 
            ios: 'installDiscordOnIos',
            pc: 'installDiscordOnPC'
          }
        }),
        new QuestionModel({
          id: 'installDiscordOnAndroid',
          title: 'Discordのアプリをインストールしてください',
          type: QuestionType.MultipleChoice,
          helpText: '下の「こちらから」をクリックしてDiscordのアプリをインストールし、完了したら「インストールしました」を選んで次に進んでください。',
          required: true,
          descriptionLink: [
            new LinkOption({
              url: 'https://play.google.com/store/apps/details?id=com.discord',
              text: 'インストールはこちらから'
            })
          ],
          options: [
            new ChoiceOption({
              label: 'インストールしました',
              value: 'next'
            })
          ],
          jump: {
            'next': 'registerDiscord'
          }
        }),
        new QuestionModel({
          id: 'installDiscordOnIos',
          title: 'Discordのアプリをインストールしてください',
          type: QuestionType.MultipleChoice,
          helpText: '下の「こちらから」をクリックしてDiscordのアプリをインストールし、完了したら「インストールしました」を選んで次に進んでください。',
          required: true,
          descriptionLink: [
            new LinkOption({
              url: 'https://apps.apple.com/jp/app/discord-%E8%A9%B1%E3%81%9D%E3%81%86-%E3%83%81%E3%83%A3%E3%83%83%E3%83%88%E3%81%97%E3%82%88%E3%81%86-%E9%9B%86%E3%81%BE%E3%82%8D%E3%81%86/id985746746',
              text: 'インストールはこちらから'
            })
          ],
          options: [
            new ChoiceOption({
              label: 'インストールしました',
              value: 'next'
            })
          ],
          jump: {
            'next': 'registerDiscord'
          }
        }),
        new QuestionModel({
          id: 'installDiscordOnPc',
          title: 'Discordのアプリをインストールしてください',
          type: QuestionType.MultipleChoice,
          helpText: '下の「こちらから」をクリックしてDiscordのアプリをインストールし、完了したら「インストールしました」を選んで次に進んでください。',
          required: true,
          descriptionLink: [
            new LinkOption({
              url: 'https://discord.com/download',
              text: 'インストールはこちらから'
            })
          ],
          options: [
            new ChoiceOption({
              label: 'インストールしました',
              value: 'next'
            })
          ],
          jump: {
            'next': 'registerDiscord'
          }
        }),
        new QuestionModel({
          id: 'registerDiscord',
          title: '次にDiscordのアカウントを作成します',
          type: QuestionType.MultipleChoice,
          helpText: '先ほどインストールしたアプリを起動し、「登録」もしくは「アカウント登録」を押してアカウントを作成してください。',
          required: true,
          options: [
            new ChoiceOption({
              label: 'アカウントを作成しました',
              value: 'next'
            })
          ],
        }),
        new QuestionModel({
          id: 'checkMailAuth',
          title: 'メールアドレスの認証を完了しましょう',
          type: QuestionType.MultipleChoice,
          helpText: '先ほど入力したメールアドレス宛に「メールアドレスを確認してください」というメールが届いていますので、「メールアドレスを認証する」をクリックして認証を完了させてください。',
          required: true,
          options: [
            new ChoiceOption({
              label: '完了しました',
              value: 'next'
            })
          ],
          jump: {
            next: '_submit'
          }
        }),
        new QuestionModel({
          id: 'checkAlreadyMailAuth',
          title: 'メールアドレスの認証は完了していますか？',
          type: QuestionType.MultipleChoice,
          helpText: '当サーバーでは荒らし等のユーザーを防止する目的でメールアドレスの認証が完了しているユーザーのみ参加できるようにしています。アプリ上でオレンジ色のバナーが表示されている場合は完了していませんので、完了してから次のステップに進んで下さい。',
          required: true,
          options: [
            new ChoiceOption({
              label: '完了しました',
              value: 'next'
            })
          ],
          jump: {
            next: '_submit'
          }
        }),
      ],
      interactiveGuideLanguage: new LanguageModel({
        continue: '次へ',
        pressEnter: 'ボタンかエンターキーを押してください',
        ok: '決定',
      })
    }
  },
  methods: {
    joinGroup: function (){
      this.$refs.interactionQuestions.submitted = true
      this.$router.push('/discord')
    }
  }
}
</script>

<style>
  @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.css';
  @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css';
</style>