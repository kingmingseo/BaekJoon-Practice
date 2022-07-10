import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;



public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); 
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out)); 
		StringTokenizer st = new StringTokenizer(br.readLine());
		StringTokenizer st2 = new StringTokenizer(br.readLine());
		int num1=Integer.parseInt(st.nextToken());
		int num2=Integer.parseInt(st.nextToken());
		
	
	
		int[] arr= new int[num1];
		
		for (int i=0; i<num1; i++) {
			arr[i]=Integer.parseInt(st2.nextToken());
			if(arr[i]<num2)bw.write(String.valueOf(arr[i])+" ");
		}
		
		
		
		
	
		bw.close();
		br.close();
			
		
		
		
		
		
		}
}

