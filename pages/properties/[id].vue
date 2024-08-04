<template>
    <div>
        <section id='intro'>
			
			<div class="jumbotron jumbotron2" :style="'background-image: url(' + property.photos[0] + ') '">
			  <div class='container'>
				  <div class='row'>
					  <div class='col-md-12'>
					  </div>
				  </div>
			  </div>
			</div>
			
		</section>
		<section id='singlecontent'>
	        <div class="container">
		        <div class='row'>
					  <div class='col-md-8'>
						  <h1>{{ property.title }} <span class='thetag'>{{ property.status }}</span></h1>
						  <h5>{{ property.rent }}/月</h5>
						  <p>
							  地址： {{ property.address }}<br>
							實用面積： {{ property.szie }}呎<br>
							房間： {{ property.noofroom }}<br>
							廳 ： {{ property.nooflivingroom }}<br>
							刊登日期： {{ formatDate(property.createdAt) }}
						  </p>
						  <h4>簡介</h4>
                          <div v-html="property.content"></div>
					  </div>
					  <div class='col-md-4'>
						  <div class='apply'>
							  <h5><i class="far fa-calendar-check"></i> 業主聯絡方法</h5>
							  <hr>
							  <p>你必須登入才能看見資料</p>
						  </div>
						 
					  </div>
		        </div>
	        </div>
		</section>
		
    </div>
</template>

<script setup>

    const runtimeConfig = useRuntimeConfig();
    const route = useRoute();

    let id = route.params.id;

    const property = ref();
    const { data }= await useFetch(runtimeConfig.public.apiBase + 'properties/' + id);
    
    if (data.value){
        property.value = data.value;
    }



</script>