<template>
  <div class="Destilreques">
    <div class="container">
      <div class="row">
        <div
          class="d-flex justify-content-center align-items-center mb-3 text-center"
        >
          <h1 class="mainsize active">تفاصيل الطلب</h1>
        </div>

        <div v-if="step === 3">
          <div
            class="by-rqd d-flex justify-content-center mb-2 mt-3 gap-2 align-items-center flex-wrap"
          >
            <button
              class="bg-danger text-white"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              تقديم شكوى
            </button>
            <button data-bs-toggle="modal" data-bs-target="#trackingModal">
              تتبع الطلب
            </button>
          </div>
          <!-- ///modal problem// -->
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="m-0 text-center scss">
                  <p class="fw-medium">تقديم شكوى</p>
                  <label for="" class="text-end mb-2 d-block fw-medium"
                    >سبب الشكوى</label
                  >
                  <select
                    class="form-select mb-3"
                    aria-label="Default select example"
                  >
                    <option selected>اختر سبب الشكوى</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <div class="mt-2 mb-3 modd">
                    <label for="" class="text-end mb-2 d-block fw-medium"
                      >سبب الشكوى</label
                    >
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="اكتب تفاصيل الشكوى"
                    ></textarea>
                  </div>
                  <div
                    class="img-loda mt-3 mb-4 d-flex justify-content-start p-3 me-2"
                    @click="triggerFileInput"
                  >
                    <div class="d-flex flex-column align-items-center mt-2">
                      <i
                        class="pi pi-cloud-download"
                        style="font-size: 2rem"
                      ></i>
                      <p class="text-center">ارفاق صوره</p>
                    </div>
                  </div>
                  <input
                    type="file"
                    ref="fileInput"
                    class="d-none"
                    @change="handleFileChange"
                  />
                  <div v-if="selectedImage" class="mt-3">
                    <img
                      :src="selectedImage"
                      alt="Selected Image"
                      class="img-thumbnail"
                    />
                  </div>
                  <div
                    class="btn-home d-flex gap-3 justify-content-center mt-3 mb-3"
                  >
                    <router-link to="/">
                      <button class="btn btn-danger">الغاء</button>
                    </router-link>
                    <button class="btn btn-secondary" data-bs-dismiss="modal">
                      تراجع
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- //modal follow request// -->
          <!-- Modal لتتبع الطلب -->
          <div
            class="modal fade"
            id="trackingModal"
            tabindex="-1"
            aria-labelledby="trackingModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="trackingModalLabel">
                    تتبع الطلب
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <iframe
                    src="https://www.google.com/maps?q=Egypt&output=embed"
                    width="100%"
                    height="450"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    اغلاق
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="step === 4">
          <div
            class="by-rqd d-flex justify-content-center mb-2 mt-3 gap-2 align-items-center flex-wrap"
          >
            <button
              class="bg-danger text-white"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              تقديم شكوى
            </button>
          </div>
          <!-- ///modal problem// -->
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="m-0 text-center scss">
                  <p class="fw-medium">تقديم شكوى</p>
                  <label for="" class="text-end mb-2 d-block fw-medium"
                    >سبب الشكوى</label
                  >
                  <select
                    class="form-select mb-3"
                    aria-label="Default select example"
                  >
                    <option selected>اختر سبب الشكوى</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <div class="mt-2 mb-3 modd">
                    <label for="" class="text-end mb-2 d-block fw-medium"
                      >سبب الشكوى</label
                    >
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="اكتب تفاصيل الشكوى"
                    ></textarea>
                  </div>
                  <div
                    class="img-loda mt-3 mb-4 d-flex justify-content-start p-3 me-2"
                    @click="triggerFileInput"
                  >
                    <div class="d-flex flex-column align-items-center mt-2">
                      <i
                        class="pi pi-cloud-download"
                        style="font-size: 2rem"
                      ></i>
                      <p class="text-center">ارفاق صوره</p>
                    </div>
                  </div>
                  <input
                    type="file"
                    ref="fileInput"
                    class="d-none"
                    @change="handleFileChange"
                  />
                  <div v-if="selectedImage" class="mt-3">
                    <img
                      :src="selectedImage"
                      alt="Selected Image"
                      class="img-thumbnail"
                    />
                  </div>
                  <div
                    class="btn-home d-flex gap-3 justify-content-center mt-3 mb-3"
                  >
                    <router-link to="/">
                      <button class="btn btn-danger">الغاء</button>
                    </router-link>
                    <button class="btn btn-secondary" data-bs-dismiss="modal">
                      تراجع
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- //modal follow request// -->
          <!-- Modal لتتبع الطلب -->
          <div
            class="modal fade"
            id="trackingModal"
            tabindex="-1"
            aria-labelledby="trackingModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="trackingModalLabel">
                    تتبع الطلب
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <iframe
                    src="https://www.google.com/maps?q=Egypt&output=embed"
                    width="100%"
                    height="450"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    اغلاق
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- //////////////////// -->
        <div class="notavaild" v-if="step === 2">
          <p class="text-end">
            يرجى العلم عدم توفير السرير التركى وتم خصم قيمته من الطلب
          </p>
        </div>
        <div class="notavaild" v-if="step === 3">
          <p class="text-end">تم تجهيز طلبك وتسليمة الى شركة الشحن</p>
        </div>
        <div class="notavaild" v-if="step === 4">
          <p class="text-end">تم تجهيز طلبك وتسليمة الى المندوب</p>
        </div>

        <div class="progress-container">
          <label
            v-for="(stepLabel, index) in stepLabels"
            :key="index"
            class="progress-step"
          >
            <input type="radio" name="progress" :checked="step === index + 1" />
            <span
              class="progress-text"
              :class="{ active: step >= index + 1 }"
              >{{ stepLabel }}</span
            >
          </label>
        </div>

        <div class="d-flex justify-content-center">
          <div class="text-rad" v-if="step === 1">
            <div
              class="grop-radis d-flex justify-content-center gap-3 flex-wrap mt-3"
            >
              <div class="desc" style="width: 600px; height: auto">
                <div class="destext border-bottom">
                  <p class="fw-semibold p-1">ملخص الطلب:</p>
                </div>
                <div
                  v-for="(item, index) in orderSummary"
                  :key="index"
                  class="onetext text-black-50 mb-1 d-flex justify-content-between align-items-center flex-wrap"
                >
                  <p>{{ item.label }}</p>
                  <p>{{ item.value }}</p>
                </div>
                <div
                  class="onetextw p-1 d-flex justify-content-between align-items-center flex-wrap"
                >
                  <p class="text-black-50">الاجمالى</p>
                  <p>60.00 رس</p>
                </div>
              </div>
            </div>
            <div
              class="grop-radis d-flex justify-content-center gap-3 flex-wrap mt-3"
            >
              <div class="desc" style="width: 600px; height: auto">
                <p class="border-bottom">ملاحظات</p>
                <div class="texa">
                  <textarea
                    name=""
                    id=""
                    style="width: 600px; height: 150px"
                    placeholder="ضع ملاحظاتك هنا"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <p class="active mainsize">المنتجات المضافة</p>
            </div>
            <div
              class="grop-radis d-flex justify-content-center gap-3 flex-wrap mt-3"
            >
              <div
                class="col-lg-3 col-md-6 mt-3"
                v-for="card in cards"
                :key="card.id"
              >
                <div class="card-main m-auto">
                  <div
                    class="love position-relative d-flex justify-content-end"
                  >
                    <Button
                      icon="pi pi-heart"
                      severity="help"
                      text
                      raised
                      rounded
                      aria-label="Favorite"
                      class="position-absolute p-2 z-2 fs-3 pi pi-heart bg-transparent border-0"
                      :class="{ bg: isFavorite(card.id) }"
                      @click="toggleFavorite(card)"
                    />
                  </div>
                  <div class="card-head-main">
                    <img :src="card.img" class="img-top" alt="" />
                  </div>
                  <div class="card-body-main">
                    <div class="flex-main-between p-2">
                      <div class="fw-bold bad">{{ card.title }}</div>
                      <div class="color-main no-shrink">{{ card.price }}</div>
                    </div>
                    <div class="flex-main-between">
                      <div class="d-flex flex-column justify-content-start">
                        <div class="d-flex p-1">
                          <p class="text-black-50 text-start">
                            {{ card.hotle }}
                          </p>
                        </div>
                        <div class="star-rate text-start p-1">
                          <div class="card flex justify-content-center">
                            <Rating v-model="card.value" :cancel="false" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex-center mt-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="text-rad" v-if="step === 2">
            <div
              class="grop-radis d-flex justify-content-center gap-3 flex-wrap mt-3"
            >
              <div class="desc" style="width: 600px; height: auto">
                <div class="destext border-bottom">
                  <p class="fw-semibold p-1">ملخص الطلب:</p>
                </div>
                <div
                  v-for="(item, index) in orderSummary"
                  :key="index"
                  class="onetext text-black-50 mb-1 d-flex justify-content-between align-items-center flex-wrap"
                >
                  <p>{{ item.label }}</p>
                  <p>{{ item.value }}</p>
                </div>
                <div
                  class="onetextw p-1 d-flex justify-content-between align-items-center flex-wrap"
                >
                  <p class="text-black-50">الاجمالى</p>
                  <p>60.00 رس</p>
                </div>
              </div>
            </div>
            <div
              class="grop-radis d-flex justify-content-center gap-3 flex-wrap mt-3"
            >
              <div class="desc" style="width: 600px; height: auto">
                <p class="border-bottom">ملاحظات</p>
                <div class="texa">
                  <textarea
                    name=""
                    id=""
                    style="width: 600px; height: 150px"
                    placeholder="ضع ملاحظاتك هنا"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <p class="active mainsize">المنتجات المضافة</p>
            </div>
            <div
              class="grop-radis d-flex justify-content-center gap-3 flex-wrap mt-3"
            >
              <!-- ///card// -->

              <div
                class="col-lg-3 col-md-6 mt-3"
                v-for="card in cards"
                :key="card.id"
              >
                <div class="card-main m-auto">
                  <div
                    class="love position-relative d-flex justify-content-end"
                  >
                    <Button
                      icon="pi pi-heart"
                      severity="help"
                      text
                      raised
                      rounded
                      aria-label="Favorite"
                      class="position-absolute p-2 z-2 fs-3 pi pi-heart bg-transparent border-0"
                      :class="{ bg: isFavorite(card.id) }"
                      @click="toggleFavorite(card)"
                    />
                  </div>
                  <div class="card-head-main">
                    <img :src="card.img" class="img-top" alt="" />
                  </div>
                  <div class="card-body-main">
                    <div class="flex-main-between p-2">
                      <div class="fw-bold bad">{{ card.title }}</div>
                      <div class="color-main no-shrink">{{ card.price }}</div>
                    </div>
                    <div class="flex-main-between">
                      <div class="d-flex flex-column justify-content-start">
                        <div class="d-flex p-1">
                          <p class="text-black-50 text-start">
                            {{ card.hotle }}
                          </p>
                        </div>

                        <div class="star-rate text-start p-1">
                          <div class="card flex justify-content-center">
                            <Rating v-model="card.value" :cancel="false" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex-center mt-3">
                      <!--  -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="by-rq d-flex justify-content-around mt-3 align-items-center flex-wrap"
            >
              <button class="mb-2" @click="nextStep">استكمال الطلب</button>
              <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                الغاء الطلب
              </button>
            </div>
            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div class="m-0 text-center scss">
                      <i
                        class="pi pi-exclamation-triangle text-danger"
                        style="font-size: 4rem"
                      ></i>
                      <h1 class="mainsize fw-medium mt-2" style="color: 007bff">
                        هل انت متأكد من الغاء الطلب؟
                      </h1>
                      <div class="btn-home d-flex gap-3 justify-content-center">
                        <router-link to="/">
                          <button class="btn btn-danger">الغاء</button>
                        </router-link>
                        <button
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          تراجع
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="text-rad" v-if="step === 3">
            <div
              class="grop-radis d-flex justify-content-center gap-3 flex-wrap mt-3"
            >
              <div class="desc" style="width: 600px; height: auto">
                <div class="destext border-bottom">
                  <p class="fw-semibold p-1">ملخص الطلب:</p>
                </div>
                <div
                  v-for="(item, index) in orderSummary"
                  :key="index"
                  class="onetext text-black-50 mb-1 d-flex justify-content-between align-items-center flex-wrap"
                >
                  <p>{{ item.label }}</p>
                  <p>{{ item.value }}</p>
                </div>
                <div
                  class="onetextw p-1 d-flex justify-content-between align-items-center flex-wrap"
                >
                  <p class="text-black-50">الاجمالى</p>
                  <p>60.00 رس</p>
                </div>
              </div>
            </div>
            <div
              class="grop-radis d-flex justify-content-center gap-3 flex-wrap mt-3"
            >
              <div class="desc" style="width: 600px; height: auto">
                <p class="border-bottom">ملاحظات</p>
                <div class="texa">
                  <textarea
                    name=""
                    id=""
                    style="width: 600px; height: 150px"
                    placeholder="ضع ملاحظاتك هنا"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <p class="active mainsize">المنتجات المضافة</p>
            </div>
            <div
              class="grop-radis d-flex justify-content-center gap-3 flex-wrap mt-3"
            >
              <!-- ///card// -->

              <div
                class="col-lg-3 col-md-6 mt-3"
                v-for="card in cards"
                :key="card.id"
              >
                <div class="card-main m-auto">
                  <div
                    class="love position-relative d-flex justify-content-end"
                  >
                    <Button
                      icon="pi pi-heart"
                      severity="help"
                      text
                      raised
                      rounded
                      aria-label="Favorite"
                      class="position-absolute p-2 z-2 fs-3 pi pi-heart bg-transparent border-0"
                      :class="{ bg: isFavorite(card.id) }"
                      @click="toggleFavorite(card)"
                    />
                  </div>
                  <div class="card-head-main">
                    <img :src="card.img" class="img-top" alt="" />
                  </div>
                  <div class="card-body-main">
                    <div class="flex-main-between p-2">
                      <div class="fw-bold bad">{{ card.title }}</div>
                      <div class="color-main no-shrink">{{ card.price }}</div>
                    </div>
                    <div class="flex-main-between">
                      <div class="d-flex flex-column justify-content-start">
                        <div class="d-flex p-1">
                          <p class="text-black-50 text-start">
                            {{ card.hotle }}
                          </p>
                        </div>

                        <div class="star-rate text-start p-1">
                          <div class="card flex justify-content-center">
                            <Rating v-model="card.value" :cancel="false" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex-center mt-3">
                      <!--  -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="grop-radis d-flex justify-content-center gap-3 flex-wrap mt-3"
            >
              <div class="reschung d-flex justify-content-between">
                <div>
                  <p class="fw-medium">فاتورة الطلب</p>
                </div>
                <div class="cvar2">
                  <a href="../assets/cost.jpg" download>
                    <button>تحميل الفاتورة</button>
                  </a>
                </div>
              </div>
              <div class="img-reschu">
                <img src="../assets/cost.jpg" alt="" class="img-fluid" />
              </div>
            </div>
          </div>
          <div class="text-rad" v-if="step === 4">
            <div
              class="grop-radis d-flex justify-content-center gap-3 flex-wrap mt-3"
            >
              <div class="desc" style="width: 600px; height: auto">
                <div class="destext border-bottom">
                  <p class="fw-semibold p-1">ملخص الطلب:</p>
                </div>
                <div
                  v-for="(item, index) in orderSummary"
                  :key="index"
                  class="onetext text-black-50 mb-1 d-flex justify-content-between align-items-center flex-wrap"
                >
                  <p>{{ item.label }}</p>
                  <p>{{ item.value }}</p>
                </div>
                <div
                  class="onetextw p-1 d-flex justify-content-between align-items-center flex-wrap"
                >
                  <p class="text-black-50">الاجمالى</p>
                  <p>60.00 رس</p>
                </div>
              </div>
            </div>
            <div
              class="grop-radis d-flex justify-content-center gap-3 flex-wrap mt-3"
            >
              <div class="desc" style="width: 600px; height: auto">
                <p class="border-bottom">ملاحظات</p>
                <div class="texa">
                  <textarea
                    name=""
                    id=""
                    style="width: 600px; height: 150px"
                    placeholder="ضع ملاحظاتك هنا"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <p class="active mainsize">المنتجات المضافة</p>
            </div>
            <div
              class="grop-radis d-flex justify-content-center gap-3 flex-wrap mt-3"
            >
              <!-- ///card// -->

              <div
                class="col-lg-3 col-md-6 mt-3"
                v-for="card in cards"
                :key="card.id"
              >
                <div class="card-main m-auto">
                  <div
                    class="love position-relative d-flex justify-content-end"
                  >
                    <Button
                      icon="pi pi-heart"
                      severity="help"
                      text
                      raised
                      rounded
                      aria-label="Favorite"
                      class="position-absolute p-2 z-2 fs-3 pi pi-heart bg-transparent border-0"
                      :class="{ bg: isFavorite(card.id) }"
                      @click="toggleFavorite(card)"
                    />
                  </div>
                  <div class="card-head-main">
                    <img :src="card.img" class="img-top" alt="" />
                  </div>
                  <div class="card-body-main">
                    <div class="flex-main-between p-2">
                      <div class="fw-bold bad">{{ card.title }}</div>
                      <div class="color-main no-shrink">{{ card.price }}</div>
                    </div>
                    <div class="flex-main-between">
                      <div class="d-flex flex-column justify-content-start">
                        <div class="d-flex p-1">
                          <p class="text-black-50 text-start">
                            {{ card.hotle }}
                          </p>
                        </div>

                        <div class="star-rate text-start p-1">
                          <div class="card flex justify-content-center">
                            <Rating v-model="card.value" :cancel="false" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex-center mt-3">
                      <!--  -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="grop-radis d-flex justify-content-center gap-3 flex-wrap mt-3"
            >
              <div class="reschung d-flex justify-content-between">
                <div>
                  <p class="fw-medium">فاتورة الطلب</p>
                </div>
                <div class="cvar2">
                  <a href="../assets/cost.jpg" download>
                    <button>تحميل الفاتورة</button>
                  </a>
                </div>
              </div>
              <div class="img-reschu">
                <img src="../assets/cost.jpg" alt="" class="img-fluid" />
              </div>
            </div>

            <div
              class="reschung-people m-auto mt-3  d-flex justify-content-between align-items-center border-bottom  flex-wrap"
            >
              <div class="people d-flex gap-3 align-items-center">
                <div class="abdu d-flex gap-2 flex-column">
                  <div class="img-people">
                    <img :src="pe" alt="" class="img-fluid" />
                  </div>
                </div>
                <div>
                  <p class="p-2 fw-semibold">عبدالله احمد</p>
                  <div class="d-flex gap-2">
                    <i class="pi pi-star p-2"></i>
                    <div class="coun mb-2"><p>مصر</p></div>
                  </div>
                </div>
              </div>
              <div class="people d-flex gap-3 mb-3  align-items-center">
                <div class="myphone d-flex gap-2  align-items-center">
                  <i class="pi pi-phone"></i>
                  <p class="mt-3">+201028924906</p>
                </div>
                <div class="myphone d-flex gap-2  align-items-center">
                  <i class="pi pi-comments" style="color: #e6bd0f"></i>
                  <p class="mt-3">اجراء محادثة</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center gap-3 mt-4 prevand">
          <button @click="prevStep" :disabled="step === 1">السابق</button>
          <button @click="nextStep" :disabled="step === stepLabels.length">
            التالي
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import imgcard from "../assets/vojtech-bruzek-Yrxr3bsPdS0-unsplash.webp";
import imgp from "../assets/Untitled-1.jpg";
import Rating from "primevue/rating";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Destilrequest",
  selectedImage: null,

  data() {
    return {
      pe: imgp,

      cards: [
        {
          id: 1,
          img: imgcard,
          title: "سرير تركى",
          price: "8000ر.س",
          hotle: "فنادق",
          offer: "off 50%",
          det: "تفاصيل المنتج",
          value: ref("3"),
        },
        {
          id: 2,
          img: imgcard,
          title: "سرير تركى",
          price: "8000ر.س",
          hotle: "فنادق",
          offer: "off 50%",
          det: "تفاصيل المنتج",
          value: ref("3"),
        },
        {
          id: 3,
          img: imgcard,
          title: "سرير تركى",
          price: "8000ر.س",
          hotle: "فنادق",
          offer: "off 50%",
          det: "تفاصيل المنتج",
          value: ref("3"),
        },
      ],
      currentCardId: null,
      step: 1,
      stepLabels: ["قيد الموافقة", "قيد التجهيز", "في الطريق", "تم الاستلام"],
      orderSummary: [
        { label: "قيمة الطلب", value: "60.00 رس" },
        { label: "رسوم التوصيل", value: "10.00 رس" },
        { label: "القيمة المضافة", value: "00.00 رس" },
        { label: "تاريخ استلام الطلب", value: "18/5/2024 " },
        { label: "رقم الجوال", value: "01028294906 " },
        { label: "المدينة", value: "المنصوره " },
        { label: "اسم المستلم", value: "عبدالله احمد " },
      ],
    };
  },
   computed: {
    ...mapGetters(["cartItems"]),
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    ...mapActions(["removeFromCart"]),

    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.selectedImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    toggleFavorite(card) {
      card.favorite = !card.favorite;
    },
    isFavorite(cardId) {
      const card = this.cards.find((card) => card.id === cardId);
      return card ? card.favorite : false;
    },
    nextStep() {
      if (this.step < this.stepLabels.length) {
        this.step++;
      }
    },
    prevStep() {
      if (this.step > 1) {
        this.step--;
      }
    },
  },
};
</script>

<style scoped>
.Destilreques {
  padding: 30px 0;
}
.active {
  border-bottom: 3px solid var(--main-color);
  width: fit-content;
  padding: 5px;
}
.img-loda i {
  color: var(--main-color);
}
.coun {
  width: 90px;
  padding: 0px;
  border-radius: 4px;
  background-color: #e4eeff;
  text-align: center;
}
.myphone {
  width: 150px;
  height: 40px;
  padding: 3px;
  border-radius: 4px;
  background-color: #e4eeff;
  text-align: center;
}
.prevand button:first-child{
background-color: red;
color: #fff;
width: 100px;
padding: 5px;
border: none;
outline: none;
border-radius: 4px;
}
.prevand button:last-child{
  background-color: var(--main-color);
  color: #fff;
width: 100px;
padding: 5px;
border: none;
outline: none;
border-radius: 4px;
}
.img-loda {
  border: 3px dashed var(--main-color);
  width: 100px;
  height: 100px;
  padding: 10px;
  display: flex;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
}
.p-steps {
  direction: ltr !important;
}
.onetext {
  font-size: 14px;
  font-weight: 700;
  transition: 0.3s;
}
.onetext:hover {
  background-color: #e4eeff;
}
.texa textarea {
  border: none;
  border-radius: 4px;
  outline: none;
  resize: none;
}
.onetextw {
  font-size: 14px;
  font-weight: 700;
  background-color: #e4eeff;
}
.modd textarea {
  width: 441px;
  border: 1px solid #ddd;
  resize: none;
  outline: none;
  border-radius: 4px;
}
.notavaild p {
  background-color: var(--main-color);
  color: #fff;
  width: 600px;
  margin: auto;
  padding: 5px;
  font-size: 14px;
  border-radius: 4px;
}
.onetextw:last-child {
  color: var(--main-color);
}
.img-people img {
  width: 80px;
  height: 80px;
}
.protext {
  color: #007bff;
}
.progress-container {
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 1px 4px 1px rgb(0 0 0 / 12%);
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
}
.desc {
  box-shadow: 0px 1px 4px 1px rgb(0 0 0 / 12%);
  padding: 0 5px;
}
.reschung {
  width: 600px;
}
.reschung-people {
  width: 620px;
  box-shadow: 0px 1px 4px 1px rgb(0 0 0 / 12%);
}
@media (max-width: 477px) {
  .desc {
    width: 350px !important;
  }
  .reschung {
    width: 300px;
  }
  .by-rq button:first-child {
    background-color: var(--main-color);
    width: 209px !important;
    padding: 7px;
    border: none;
    border-radius: 4px;
    outline: none;
    color: #fff;
}
  .by-rq button:last-child {
    background-color: var(--main-color);
    width: 209px !important;
    padding: 7px;
    border: none;
    border-radius: 4px;
    outline: none;
    color: #fff;
}
  .reschung-people {
    width: 320px;
  }
  .texa textarea {
    width: 350px !important;
    padding: 0 5px;
  }
  .progress-container {
    width: 90%;
  }
  .notavaild p {
    width: fit-content;
    font-size: 12px;
    margin-bottom: 6px;
  }
  .modd textarea[data-v-b8dbc334] {
    width: 326px;
    border: 1px solid #ddd;
    resize: none;
    outline: none;
    border-radius: 4px;
  }
}
.progress-step {
  text-align: center;
  position: relative;
  width: 25%;
  padding: 10px;
  color: #ccc;
}

.progress-step input[type="radio"] {
  display: none;
}
.by-rq button:first-child {
  background-color: var(--main-color);
  width: 300px;
  padding: 7px;
  border: none;
  outline: none;
  color: #fff;
}
.by-rq button:last-child {
  background-color: red;
  width: 300px;
  padding: 7px;
  border: none;
  outline: none;
  color: #fff;
}
.by-rqd button:first-child {
  width: 150px;
  border-radius: 4px;
  padding: 7px;
  border: none;
  outline: none;
  color: #fff;
}
.by-rqd button:last-child {
  background-color: var(--main-color);
  width: 150px;
  border-radius: 4px;
  padding: 7px;
  border: none;
  outline: none;
  color: #fff;
}
.progress-step .progress-text {
  display: inline-block;
  padding: 5px 10px;
  /* border: 2px solid #ccc; */
  /* border-radius: 10px; */
}
.bg {
  background-color: #f65555 !important;
  border-radius: 50%;
}
.active {
  border-bottom: 4px solid var(--main-color);
  width: fit-content;
  padding: 5px;
}
.card-main {
  box-shadow: 0px 1px 4px 1px rgb(0 0 0 / 12%);
  border-radius: 8px;
  height: 100%;
  max-width: 280px;
}
.img-top {
  width: 100%;
  height: 200px;

  transition: all 0.3s ease-in-out;
}
.img-top:hover {
  transform: scale(1.1);
}
.card-head-main {
  overflow: hidden;
  border-radius: 8px;
}
.color-main {
  color: var(--main-color);
  font-weight: bold;
}
.flex-main-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.left-text {
  text-align: left;
  padding: 5px;
  font-weight: 700;
}
.bad {
  font-size: 20px;
}
.main-sale {
  padding: 8px;
  width: 120px;
  text-align: center;
  border: 1px solid var(--main-color);
  border-radius: 4px;
  color: var(--main-color);
}
.flex-center {
  display: flex;
  justify-content: center;
}
a.main-a {
  padding: 8px 25px;
  border: 1px solid var(--main);
  border-radius: 5px;
  text-decoration: none;
}
.one-line {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.no-shrink {
  flex-shrink: 0;
}
.card-body-main {
  height: calc(100% - 200px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.btn button {
  width: 180px;
  padding: 10px;
  border: 1px solid var(--main-color);
  border-radius: 4px;
  background-color: transparent;
  color: var(--main-color);
  font-weight: 700;
  transition: 0.3s;
}
.btn button:hover {
  background-color: var(--main-color);
  color: #fff;
}
.love i {
  left: 5px;
}
.progress-step .progress-text.active {
  color: #000;
  /* border-color: #007bff; */
}

.progress-step:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  height: 4px;
  width: 100%;
  /* background-color: #ccc; */
  z-index: -1;
}

.progress-step:first-child:before {
  display: none;
}

.progress-step .progress-text.active:before {
  background-color: #007bff;
}
</style>
