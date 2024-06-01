<template>
  <div class="Notfications">
    <div class="container">
      <div class="row">
        <div class="btn-text text-center">
          <p>{{nota}}</p>
        </div>
        <div class="not mb-3"  v-for="no in notf"
              :key="no.id">
          <div class="bail d-flex gap-2">
            <div class="icon">
              <i class="pi pi-bell"></i>
            </div>
            <div
              class="text-icon d-flex flex-column "
             
            >
              <p class="fw-medium sia">{{ no.des }}</p>
              <div class="d-flex gap-2 align-items-center text-black-50">
                <i :class="no.icon"></i>
                <p class="minute">{{ no.mint }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notfications",
  data() {
    return {
        nota:"الاشعارات",
      notf: [
        {
          id: 1,
          des: "هذا النص هو مثال لاى نص اخر يمكن ان يستبدل فى نفس المساحه",
          icon: " pi pi-clock mb-2",
          mint: "منذ 5 دقائق",
        },
        {
          id: 2,
          des: "هذا النص هو مثال لاى نص اخر يمكن ان يستبدل فى نفس المساحه",
          icon: " pi pi-clock mb-2",
          mint: "منذ 5 دقائق",
        },
        {
          id: 3,
          des: "هذا النص هو مثال لاى نص اخر يمكن ان يستبدل فى نفس المساحه",
          icon: " pi pi-clock mb-2",
          mint: "منذ 5 دقائق",
        },
        {
          id: 4,
          des: "هذا النص هو مثال لاى نص اخر يمكن ان يستبدل فى نفس المساحه",
          icon: " pi pi-clock mb-2",
          mint: "منذ 5 دقائق",
        },
      ],
    };
  },
};
</script>

<style scoped>
.Notfications {
  padding: 30px 0;
}
.btn-text p {
  background-color: #e4eeff;
  color: var(--main-color);
  width: 120px;
  border-radius: 4px;
  padding: 8px;
  margin: auto;
  cursor: pointer;
  margin-bottom: 15px;
}
.not {
  background-color: #e4eeff;
    box-shadow: 0px 1px 4px 1px rgb(0 0 0 / 12%);
  padding: 5px;
  border-radius: 4px;
}
.icon i {
  width: 60px;
  height: 60px;
  background-color: var(--main-color);
  border-radius: 50%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
}
.minute {
  font-size: 12px;
}
@media (max-width:477px) {
   .not {
    width: 300px;
    margin: auto;
} 
.icon i{
    width: 35px;
    height: 35px;
}
.sia{
    font-size: 13px;
}
}
</style>
