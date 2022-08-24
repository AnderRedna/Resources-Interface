const Notifier = {
    async init() {
      const permission = await Notification.requestPermission()
      if(permission !== "granted"){
        throw new Error('Permission denied')
      }
    },
    notify({title, icon}) {
        new Notification(title),
        {
            icon
        }
    }
}

export { Notifier }