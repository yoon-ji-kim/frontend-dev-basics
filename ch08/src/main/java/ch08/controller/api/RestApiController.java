package ch08.controller.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ch08.dto.JsonResult;
import ch08.vo.UserVo;

@RestController
@RequestMapping("/api/user")
public class RestApiController {
	
	@PostMapping("")
	public JsonResult create(@RequestBody UserVo vo) {
		vo.setNo(1L);
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
	
	@GetMapping("")
	public JsonResult readAll() {
		List<UserVo> list = new ArrayList<>();
		
		UserVo vo1 = new UserVo();
		vo1.setNo(1L);
		vo1.setName("둘리1");
		vo1.setEmail("dooly1@gmail.com");
		list.add(vo1);
		
		UserVo vo2 = new UserVo();
		vo2.setNo(2L);
		vo2.setName("둘리2");
		vo2.setEmail("dooly2@gmail.com");
		list.add(vo2);
		return JsonResult.success(list);
	}
	
	@GetMapping("{no}")
	public JsonResult read(@PathVariable("no") Long no) {
		
		UserVo vo = new UserVo();
		vo.setNo(no);
		vo.setName("둘리"+no);
		vo.setEmail("dooly"+no+"@gmail.com");
		
		
		return JsonResult.success(vo);
	}
	
	@PutMapping("{no}")								   //JSON
	public JsonResult update(@PathVariable("no") Long no, @RequestBody UserVo vo) {
		vo.setNo(no);
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
	
	@DeleteMapping("{no}")
	public JsonResult delete(@PathVariable("no") Long no, @RequestParam(value="password", required= true, defaultValue="") String password) {
		System.out.println("password: "+ password);
		
		return JsonResult.success(no);
	}
}