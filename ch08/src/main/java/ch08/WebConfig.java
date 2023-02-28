package ch08;

import java.nio.charset.Charset;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.http.converter.xml.Jaxb2RootElementHttpMessageConverter;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;


@Configuration 
@EnableWebMvc
@ComponentScan({"ch08.controller"})
public class WebConfig implements WebMvcConfigurer{
		@Bean
		public ViewResolver viewResolver() {
			InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
			viewResolver.setViewClass(JstlView.class);
			viewResolver.setPrefix("/WEB-INF/views/");
			viewResolver.setSuffix(".jsp");
			return viewResolver;
		}
		
		@Bean
		public StringHttpMessageConverter stringHttpMessageConverter() {
			StringHttpMessageConverter messageConverter = new StringHttpMessageConverter();
			messageConverter.setSupportedMediaTypes(
					Arrays.asList(
							new MediaType("text", "html", Charset.forName("utf-8"))
							)
					);
			return messageConverter;
		}
		
		@Bean
		public MappingJackson2HttpMessageConverter mappingJackson2HttpMessageConverter() {
			Jackson2ObjectMapperBuilder builder = new Jackson2ObjectMapperBuilder().indentOutput(true).dateFormat(new SimpleDateFormat("yyyy-mm-dd"));
			MappingJackson2HttpMessageConverter messageConverter = new MappingJackson2HttpMessageConverter(builder.build());
			messageConverter.setSupportedMediaTypes(
					Arrays.asList(
							new MediaType("application", "json", Charset.forName("utf-8"))
					)
			);
			return messageConverter;
		}

		/*
		 *  1. Marshalling
		 *  	데이터(object)를 xml로 변환시키는 것
		 *  2. Unmarshalling
		 *  	xml 데이터를 특정 데이터 형태로(object)로 변환시키는 것
		 *  3. HOW TO(변환 방법)
		 *  	1) OXM(Object XMl Mapping)
		 *  		:XML 데이터와 객체를 매핑, MarshallingHttpMessageConverter 사용
		 *  	2) JAXB(Java Architecture for XML Binding)
		 *  		:OXM 도와주는 도구
		 *  		:마살링/언마살링을 어노테이션 기반으로 한다.
		 *  		:JAXB Annotaion(@XmlElmentRoot)를 사용하는 직관적인 매핑
		 *  		:Jaxb2RootElementHttpMessageConverter
		 */
		@Bean
		public Jaxb2RootElementHttpMessageConverter jaxb2RootElementHttpMessageConverter() {
			Jaxb2RootElementHttpMessageConverter messageConverter = new Jaxb2RootElementHttpMessageConverter();
			messageConverter.setSupportedMediaTypes(
				Arrays.asList(
					new MediaType("application", "xml", Charset.forName("utf-8"))
				)
			);
			return messageConverter;
		}
		@Override
		public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
			converters.add(stringHttpMessageConverter());
			//xml을 어노테이션으로 구분할 수 있어야함
			converters.add(jaxb2RootElementHttpMessageConverter());
			converters.add(mappingJackson2HttpMessageConverter());
		}

		@Override
		public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
			configurer.enable();
		}
}
